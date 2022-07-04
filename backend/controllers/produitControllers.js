const mysql = require('../database/database');

exports.getAllProduit = (req, res, next) => {
    mysql.query('SELECT * FROM Produit', (err, rows, fields)=>{
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

exports.createProduit = (req,res,next)=>{
    photo = req.query.photo;
    nom = req.query.nom;
    prix = req.query.prix;
    nbRestant = req.query.nbRestant;
    dispo = req.query.disponible;
    if (photo && nom && prix && nbRestant && dispo) {
        mysql.query('INSERT INTO Produit (photo, nom, prix, nbRestant, disponible) VALUES (?, ?, ?, ?, ?)', [photo, nom, prix, nbRestant, dispo], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Produit créée !'
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

exports.getProduitByID = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Produit WHERE Id_Produit = ?', [id], (err, rows, fields) => {
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

exports.updateProduit = (req, res, next) => {
    id = req.query.id;
    photo = req.query.photo;
    nom = req.query.nom;
    prix = req.query.prix;
    nbRestant = req.query.nbRestant;
    dispo = req.query.disponible;
    if (id && photo && nom && prix && nbRestant && dispo) {
        mysql.query('UPDATE Produit SET photo = ?, nom = ?, prix = ?, nbRestant = ?, dispo = ? WHERE Id_Produit = ?', [photo, nom, prix, nbRestant, dispo, id], (err, result) => {
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

exports.deleteProduit = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Produit WHERE Id_Produit = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Produit supprimée !'
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