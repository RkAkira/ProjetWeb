const mysql = require('../database/database');

exports.getAllAdresse = (req, res, next) => {
    mysql.query('SELECT * FROM Adresse', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
            console.log(rows);
        }
        else {
            res.status(500).json(err);
            console.log(err);
        }
    });
}

exports.createAdresse = (req, res, next) => {
    rue = req.query.rue;
    ville = req.query.ville;
    code_postal = req.query.code_postal;
    console.log(req);
    console.log(rue, ville, code_postal);
    if (rue && ville && code_postal) {
        mysql.query('INSERT INTO Adresse VALUES (?, ?, ?)', [rue, ville, code_postal], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Adresse créée !'
                });
            }
            else {
                res.status(500).json(err);
            }
        });
    }
    else {
        res.status(500).json({
            message: 'Veuillez remplir tous les champs !'
        });
    }
}

exports.getAdresseById = (req, res, next) => {
    id = req.query.id;
    console.log(req);
    if (id) {
        mysql.query('SELECT * FROM Adresse WHERE id_adresse = ?', [id], (err, rows, fields) => {
            if (!err) {
                res.status(200).json(rows);
                console.log(rows);
            }
            else {
                res.status(500).json(err);
                console.log(err);
            }
        });
    }
    else {
        res.status(500).json({
            message: 'Veuillez remplir tous les champs !'
        });
    }
}

exports.updateAdresse = (req, res, next) => {
    id = req.query.id;
    rue = req.query.rue;
    ville = req.query.ville;
    code_postal = req.query.code_postal;
    if (id && rue && ville && code_postal) {
        mysql.query('UPDATE Adresse SET rue = ?, ville = ?, code_postal = ? WHERE id_adresse = ?', [rue, ville, code_postal, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Adresse modifiée !'
                });
            }
            else {
                res.status(500).json(err);
            }
        });
    }
    else {
        res.status(500).json({
            message: 'Veuillez remplir tous les champs !'
        });
    }
}

exports.deleteAdresse = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Adresse WHERE id_adresse = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Adresse supprimée !'
                });
            }
            else {
                res.status(500).json(err);
            }
        });
    }
    else {
        res.status(500).json({
            message: 'Veuillez remplir tous les champs !'
        });
    }
}