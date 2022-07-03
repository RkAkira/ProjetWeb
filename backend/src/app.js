const express = require('express');
const app = express();
const cors = require('cors');
const bienImmobilierRoutes = require('../routes/bienImmobilierRoutes');
const adresseRoutes = require('../routes/adresseRoutes');
const garageRoutes = require('../routes/garageRoutes');
const personneRoutes = require('../routes/personneRoutes');
const transactionRoutes = require('../routes/transactionRoutes');
const visiteRoutes = require('../routes/visiteRoutes');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/bien_immobilier', bienImmobilierRoutes);
app.use('/api/adresse', adresseRoutes);
app.use('/api/garage', garageRoutes);
app.use('/api/personne', personneRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/visite', visiteRoutes);


module.exports = app;