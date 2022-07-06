const mysql = require('../database/database');

exports.getAllUser = (req, res, next) => {
    mysql.query('SELECT * FROM Utilisateur', (err, rows, fields)=>{
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

    nom = req.body.nom;
    prenom = req.body.prenom;
    adresse = req.body.adresse;
    mail = req.body.mail;
    mdp = req.body.mdp;
    admin = req.body.admin;
    if (nom && prenom && adresse && mail && mdp) {
        mysql.query('INSERT INTO Utilisateur(nom,prenom,adresse,mail,password,admin) VALUES (?, ?, ?, ?, ?, ?)', [nom, prenom, adresse, mail, mdp, admin], (err, result) => {

            if (!err) {
                res.status(200).json({
                    message: 'Utilisateur créée !'
                });
                console.log('Utilisateur créée !');
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
        console.log('Veuillez remplir tous les champs !');
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

exports.getUserByEmail = (req,res) => {
    email = req.query.mail;
    password = req.query.password;
    console.log(req.query);
    if (email && password) {
        mysql.query('SELECT * FROM Utilisateur WHERE mail = ? AND password = ?', [email, password], (err, result) => {
            if (!err) {
                if(result.length > 0){
                    console.log("result = " + result);
                    res.send(result);
                }
                else
                    res.send({message : "Email ou mot de passe incorrect"})
            }
            else {
                res.status(500).json(err);
                console.log(err);
            }
        });
    }
    else {
        res.send({message : "Veuillez remplir tous les champs"})
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
    id = req.body.id;
    nom = req.body.nom;
    prenom = req.body.prenom;
    adresse = req.body.adresse;
    mail = req.body.mail;
    mdp = req.body.password;
    admin = req.body.admin;

    console.log(req.body);

    if (true) {
        mysql.query('UPDATE Utilisateur SET nom = ?, prenom = ?, adresse = ?, mail = ?, password = ?, admin = ? WHERE ID = ?', [nom, prenom, adresse, mail, mdp, admin, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Utilisateur modifiée !'
                });
                console.log('Utilisateur modifiée !');
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
        console.log( 'Veuillez remplir tous les champs !');
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