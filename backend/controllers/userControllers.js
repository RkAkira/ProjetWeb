const mysql = require('../database/database');

exports.getAllUser = (req, res, next) => {
    mysql.query('SELECT * FROM User', (err, rows, fields)=>{
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

exports.createUser = (req,res,next)=>{

    nom = req.query.nom;
    username = req.query.prenom;
    adresse = req.query.adresse;
    mail = req.query.mail;
    mdp = req.query.mdp;
    if (nom && prenom && adresse && mail && mdp) {
        mysql.query('INSERT INTO Utilisateur VALUES (?, ?, ?)', [username, password, mail], (err, result) => {

            if (!err) {
                res.status(200).json({
                    message: 'Utilisateur créée !'
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

exports.getUserByID = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Utilisateur WHERE ID = ?', [id], (err, rows, fields) => {
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

exports.getUserById_client = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Utilisateur WHERE Id_Client = ?', [id], (err, rows, fields) => {
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

exports.updateUserbyID = (req, res, next) => {
    id = req.query.id;
    username = req.query.username;
    password = req.query.password;
    mail = req.query.mail;
    id_client = req.query.id_client
    if (id && username && password && mail && id_client) {
        mysql.query('UPDATE Utilisateur SET username = ?, password = ?, mail = ?, Id_client= ? WHERE ID = ?', [username, password, mail, id_client, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Utilisateur modifiée !'
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

exports.updateUserbyId_Client = (req, res, next) => {
    id = req.query.id;
    username = req.query.username;
    password = req.query.password;
    mail = req.query.mail;
    if (id && username && password && mail && id_client) {
        mysql.query('UPDATE Utilisateur SET username = ?, password = ?, mail = ? WHERE Id_Client = ?', [username, password, mail, id_client], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Utilisateur modifiée !'
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

exports.deleteUser = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Utilisateur WHERE ID = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Utilisateur supprimée !'
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