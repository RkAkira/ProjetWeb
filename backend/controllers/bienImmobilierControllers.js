const mysql = require('../database/database');

exports.getAllBienImmobilier = (req, res, next) => {
    mysql.query('SELECT * FROM Bien_immobilier WHERE disponibilite = 1', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            res.status(500).json(err);
            console.log(err);
        }
    });
}

exports.getAllBienImmobilierVendu = (req, res, next) => {
    mysql.query('SELECT * FROM Bien_immobilier WHERE disponibilite = 0', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            res.status(500).json(err);
            console.log(err);
        }
    });
}

exports.createBienImmobilier = (req, res, next) => {
    const nb_piece = req.body.nbChambre;
    const superficie = req.body.superficie;
    const prix_vente = req.body.prix;
    const date_disponibilite = req.body.date;
    const etat = req.body.etat;
    const type_bien = req.body.type;
    const adresse = req.body.adresse;
    const id_proprietaire = parseInt(req.body.proprio);
    const nbGarage = req.body.nbGarage;
    if(nb_piece && superficie && prix_vente && date_disponibilite && etat && type_bien && adresse && id_proprietaire){
        mysql.query('INSERT INTO Bien_immobilier (disponibilite, nb_piece, superficie, prix_vente, date_disponibilite, etat, type_bien, adresse, id_proprietaire, nb_garage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [true, nb_piece, superficie, prix_vente, date_disponibilite, etat, type_bien, adresse, id_proprietaire, nbGarage], (err, result) => {
            if (!err) {
                console.log("Bien crée");
                res.status(200).json({
                    message: 'Bien immobilier créé !'
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

exports.getBienImmobilierById = (req, res, next) => {
    const id = parseInt(req.query.id);
    if (id != null) {
        mysql.query('SELECT * FROM Bien_immobilier WHERE id_bien = ?', [id], (err, rows, fields) => {
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
        console.log("fail");
    }
}

exports.updateBienImmobilierById = (req, res, next) => {
    const disponibilite = req.body.dispo;
    const id = req.body.id;
    if(true){
        mysql.query('UPDATE Bien_immobilier SET disponibilite = ? WHERE id_bien = ?', [disponibilite, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Bien immobilier Vendu !'
                });
                console.log('Bien immobilier Vendu !');
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
        console.log("ok");
    }
}

exports.deleteBienImmobilierById = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Bien_immobilier WHERE id_bien = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Bien immobilier supprimé !'
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
