const mysql = require('../database/database');

exports.getAllVisite = (req, res, next) => {
    mysql.query('SELECT * FROM Visite', (err, rows, fields) => {
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

exports.createVisite = (req, res, next) => {
    const date_visite = req.body.date;
    const id_client = req.body.proprio;
    const id_bien = req.body.bien;
    if(date_visite && id_client){
        mysql.query('INSERT INTO Visite VALUES (?, ?, ?)', [date_visite, id_client, id_bien], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Visite créée !'
                });
                console.log('Visite créée !');
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

exports.getVisiteById = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Visite WHERE id_visite = ?', [id], (err, rows, fields) => {
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

exports.updateVisiteById = (req, res, next) => {
    id = req.query.id;
    date_visite = req.query.date_visite;
    id_client = req.query.id_client;
    if (id && date_visite && id_client) {
        mysql.query('UPDATE Visite SET date_visite = ?, id_client = ? WHERE id_visite = ?', [date_visite, id_client, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Visite modifiée !'
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

exports.deleteVisiteById = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Visite WHERE id_visite = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Visite supprimée !'
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