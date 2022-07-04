const mysql = require('../database/database');

exports.getAllSysPaiement = (req, res, next) => {
    mysql.query('SELECT * FROM Systeme_paiement', (err, rows, fields)=>{
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

exports.createSysPaiement = (req,res,next)=>{
    nom = req.query.nom;
    numCarte = req.query.numero;
    nomTitulaireCarte = req.query.nom;
    id_client = req.query.id
    if (nom && numCarte && nomTitulaireCarte && id_client) {
        mysql.query('INSERT INTO Systeme_paiement(ID, NumCommande) VALUES (?, ?, ?)', [nom, numCarte, nomTitulaireCarte, id_client], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Système de Paiement créée !'
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

exports.getSysPaiementByID_client = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Systeme_paiement WHERE ID = ?', [id], (err, rows, fields) => {
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

exports.updateSysPaiement = (req, res, next) => {
    id = req.query.id;
    nom = req.query.nom;
    numCarte = req.query.numero;
    nomTitulaireCarte = req.query.nom;
    id_client = req.query.id_client
    if (id && nom && numCarte && nomTitulaireCarte && id_client) {
        mysql.query('UPDATE Systeme_paiement SET nom = ?, numCarte = ?, nomTitulaire = ?, ID = ? WHERE Id_Systeme_paiement = ?', [nom, numCarte, nomTitulaireCarte, id_client, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Système de Paiement modifiée !'
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

exports.deleteSysPaiement = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Systeme_paiement WHERE Id_Systeme_paiement = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Système de Paiement supprimée !'
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