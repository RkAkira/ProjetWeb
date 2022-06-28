const mysql = require('../database/database');

exports.getAllRealise = (req, res, next) => {
    mysql.query('SELECT * FROM Realise', (err, rows, fields)=>{
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

exports.createRealise = (req,res,next)=>{
    id = req.query.id;
    numCommande = req.query.numCommande;
    if (id && numCommande) {
        mysql.query('INSERT INTO Realise VALUES (?, ?)', [id, numCommande], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Realisation créée !'
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

exports.getRealiseByID = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Realise WHERE ID = ?', [id], (err, rows, fields) => {
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

exports.getRealiseByNumCommande = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Realise WHERE NumCommande = ?', [id], (err, rows, fields) => {
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

exports.deleteRealise = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Realise WHERE PK_realise = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Commande supprimée !'
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