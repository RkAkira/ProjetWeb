const mysql = require('../database/database');

exports.getAllPersonne = (req, res, next) => {
    mysql.query('SELECT * FROM Personne', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            res.status(500).json(err);
            console.log(err);
        }
    });
}

exports.createPersonne = (req, res, next) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    if (nom && prenom) {
        mysql.query('INSERT INTO Personne (nom, prenom) VALUES (?, ?)', [nom, prenom], (err, result) => {
            if (!err) {
                console.log("Personne crée")
                res.status(200).json({
                    message: 'Personne créée !'
                });
            }
            else {
                console.log(err);
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

exports.getPersonneById = (req, res, next) => {
    const id = parseInt(req.query.id);
    console.log(id);
    if (id) {
        console.log("ok");

        mysql.query('SELECT * FROM Personne WHERE id_personne = ?', [id], (err, rows, fields) => {
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

exports.updatePersonneById = (req, res, next) => {
    id = req.query.id;
    nom = req.query.nom;
    prenom = req.query.prenom;
    if (id && nom && prenom) {
        mysql.query('UPDATE Personne SET nom = ?, prenom = ? WHERE id_personne = ?', [nom, prenom, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Personne modifiée !'
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

exports.deletePersonneById = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Personne WHERE id_personne = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Personne supprimée !'
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
