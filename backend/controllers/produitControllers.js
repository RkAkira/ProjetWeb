const mysql = require('../database/database');

exports.getAllProduit = (req, res, next) => {
    mysql.query('SELECT * FROM Produit', (err, rows, fields)=>{
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            res.status(500).json(err);
            console.log(err);
        }
    });
}

exports.createProduit = (req,res,next)=>{
    const photo = req.body.photo;
    const nom = req.body.nom;
    const prix = req.body.prix;
    const nbRestant = req.body.nbRestant;
    const dispo = true;
    if (photo && nom && prix && nbRestant && dispo) {
        mysql.query('INSERT INTO Produit (photo, nom, prix, nbRestant, disponible) VALUES (?, ?, ?, ?, ?)', [photo, nom, prix, nbRestant, dispo], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Produit créée !'
                });
                console.log('Produit créée !');
            }
            else {
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

exports.getProduitByID = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Produit WHERE Id_Produit = ?', [id], (err, rows, fields) => {
            if (!err) {
                res.status(200).json(rows);
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
    console.log("updateProduit"); 
    console.log(req.body);

    const id = req.body.id;
    const photo = req.body.photo;
    const nom = req.body.nom;
    const prix = req.body.prix;
    const nbRestant = req.body.nbRestant;
    const dispo = req.body.dispo;
    if (id && photo && nom && prix && nbRestant) {
        mysql.query('UPDATE Produit SET photo = ?, nom = ?, prix = ?, nbRestant = ?, disponible = ? WHERE Id_Produit = ?', [photo, nom, prix, nbRestant, dispo, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Produit modifiée !'
                });
                console.log("produit modifié")
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
        console.log("Veuillez remplir tous les champs !");

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