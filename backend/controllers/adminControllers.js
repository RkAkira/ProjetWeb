const mysql = require('../database/database');

exports.getAllAdmin = (req, res, next) => {
    mysql.query('SELECT * FROM Administrateur', (err, rows, fields)=>{
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

exports.createAdmin = (req,res,next)=>{
    name = req.query.name;
    password = req.query.password;
    if (name && password) {
        mysql.query('INSERT INTO Administrateur VALUES (?, ?)', [name, password], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Administrateur créée !'
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

exports.getAdminByID = (req,res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('SELECT * FROM Administrateur WHERE Id_Administrateur = ?', [id], (err, rows, fields) => {
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

exports.updateAdmin = (req, res, next) => {
    id = req.query.id;
    name = req.query.name;
    password = req.query.password;
    if (id && name && password) {
        mysql.query('UPDATE Administatreur SET name = ?, password = ? WHERE Id_Administatreur = ?', [name, password, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Administrateur modifiée !'
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

exports.deleteAdmin = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Administrateur WHERE Id_Administrateur = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Administrateur supprimée !'
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