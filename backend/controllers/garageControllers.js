const mysql = require('../database/database');

exports.getAllGarage = (req, res, next) => {
    mysql.query('SELECT * FROM Garage', (err, rows, fields) => {
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

exports.createGarage = (req, res, next) => {
    num = req.query.num;
    id_adresse = req.query.id_adresse;
    id_bien_immobilier = req.query.id_bien_immobilier;
    if (num && id_adresse && id_bien_immobilier) {
        mysql.query('INSERT INTO Garage VALUES (?, ?, ?)', [num, id_adresse, id_bien_immobilier], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Garage créé !'
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

exports.getGarageById = (req, res, next) => {
    num = req.query.num;
    if (num) {
        mysql.query('SELECT * FROM Garage WHERE num = ?', [num], (err, rows, fields) => {
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

exports.updateGarageById = (req, res, next) => {
    num = req.query.num;
    id_adresse = req.query.id_adresse;
    id_bien_immobilier = req.query.id_bien_immobilier;
    if (num && id_adresse && id_bien_immobilier) {
        mysql.query('UPDATE Garage SET id_adresse = ?, id_bien_immobilier = ? WHERE num = ?', [id_adresse, id_bien_immobilier, num], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Garage modifié !'
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

exports.deleteGarageById = (req, res, next) => {
    num = req.query.num;
    if (num) {
        mysql.query('DELETE FROM Garage WHERE num = ?', [num], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Garage supprimé !'
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
