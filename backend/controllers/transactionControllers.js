const mysql = require('../database/database');

exports.getAllTransaction = (req, res, next) => {
    mysql.query('SELECT * FROM Transaction', (err, rows, fields) => {
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

exports.createTransaction = (req, res, next) => {
    const commission = req.body.comission;
    const id_bien = req.body.bien;
    const date_transac = req.body.date;
    const id_client = req.body.client;
    const id_proprietaire = req.body.proprio;
    if ( commission && id_bien && date_transac && id_client && id_proprietaire) {
        mysql.query('INSERT INTO Transaction VALUES (?, ?, ?, ?, ?)', [commission, date_transac, id_client, id_proprietaire, id_bien], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Transaction créée !'
                });
                console.log("Transaction créée");
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

exports.getCountFromTransaction = (req, res, next) => {
    mysql.query('SELECT COUNT(*) as NB FROM Transaction', (err, rows, fields) => {
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


exports.getSumPriceFromTransaction = (req, res, next) => {
    mysql.query('SELECT SUM(x.prix_vente) as total FROM (SELECT prix_vente FROM Bien_immobilier b, Transaction t where t.id_bien = b.id_bien) x', (err, rows, fields) => {
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

exports.getSumOfCommission = (req, res, next) => {
    mysql.query('SELECT SUM(commission) as com FROM Transaction', (err, rows, fields) => {
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

exports.getDateLastTransaction = (req, res, next) => {
    mysql.query('SELECT DATE_FORMAT(date_transac, "%d/%m/%Y") as date FROM Transaction ORDER BY date_transac DESC LIMIT 1', (err, rows, fields) => {
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