const mysql = require('../database/database');

exports.getAllClient = (req, res, next) => {
    mysql.query('SELECT * FROM Client', (err, rows, fields)=>{
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

exports.createClient = (req, res, next)=>{
    nom = req.query.nom;
    prenom = req.query.prenom;
    adresse = req.query.adresse;
    if (nom && prenom && adresse) {
        mysql.query('INSERT INTO Client(nom, prenom, adresse) VALUES (?, ?, ?)', [nom, prenom, adresse], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Client créée !'
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

exports.getClientByID = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Client WHERE Id_Client = ?', [id], (err, rows, fields) => {
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

exports.updateClient = (req, res, next) => {
    id = req.query.id;
    nom = req.query.nom;
    prenom = req.query.prenom;
    adresse = req.query.adresse;
    if (id && nom && prenom && adresse) {
        mysql.query('UPDATE Client SET nom = ?, prenom = ?, adresse = ? WHERE Id_Client = ?', [nom, prenom, adresse, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Produit modifiée !'
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

exports.deleteClient = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Client WHERE Id_Client = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Client supprimée !'
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