const mysql = require('../database/database');

exports.getAllRassemble = (req, res, next) => {
    mysql.query('SELECT * FROM Rassemble', (err, rows, fields)=>{
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

exports.createRassemble = (req,res,next)=>{
    numCommande = req.query.numero;
    id = req.query.id;
    if (numCommande && id) {
        mysql.query('INSERT INTO Rassemble(NumCommande, Id_Produit) VALUES (?, ?)', [numCommande, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'rassemble créée !'
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

exports.getRassemble = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Rassemble WHERE NumCommande = ?', [id], (err, rows, fields) => {
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

exports.updateRassemble = (req, res, next) => {
    id = req.query.id;
    idProduit = req.query.id_produit
    if (id && idProduit) {
        mysql.query('UPDATE Rassemble SET idProduit = ? WHERE NumCommande = ?', [idProduit, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Rassemble modifiée !'
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

exports.deleteRassemble = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Rassemble WHERE PK_rassemble = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Ligne supprimée !'
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