const mysql = require('../database/database');

exports.getAllCommande = (req, res, next) => {
    mysql.query('SELECT * FROM Commande', (err, rows, fields)=>{
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


exports.createCommande = (req,res,next)=>{
    date_commande = req.query.dateCommande;
    prix_commande = req.query.prixCommande;
    valide = req.query.valide;
    if (date_commande && prix_commande && valide) {
        mysql.query('INSERT INTO Commande(dateCommande, prixCommande, valide) VALUES (?, ?, ?)', [date_commande, prix_commande, valide], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Commande créée !'
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

exports.getCommandeByID = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Commande WHERE NumCommande = ?', [id], (err, rows, fields) => {
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

exports.getCommandeByDate = (req,res, next) => {
    date = req.query.date;
    if (date) {
        mysql.query('SELECT * FROM Commande WHERE dateCommande = ?', [date], (err, rows, fields) => {
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

exports.updateCommandePrice = (req, res, next) => {
    id = req.query.id;
    prix_commande = req.query.prixCommande;
    if (id && prix_commande) {
        mysql.query('UPDATE Commande SET prixCommande = ? WHERE NumCommande = ?', [prix_commande, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Commande modifiée !'
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

exports.updateCommandeValide = (req, res, next) => {
    id = req.query.id;
    valide = req.query.valide;
    if (id && valide) {
        mysql.query('UPDATE Commande SET valide = ? WHERE NumCommande = ?', [valide, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Commande validé !'
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


exports.deleteCommande = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Commande WHERE NumCommande = ?', [id], (err, result) => {
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