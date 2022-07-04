const express = require('express');
const app = express();
const cors = require('cors');

const commandeRoutes = require('../routes/commandeRoutes');
const produitRoutes = require('../routes/produitRoutes');
const clientRoutes = require('../routes/clientRoutes');
const adminRoutes = require('../routes/adminRoutes');
const userRoutes = require('../routes/userRoutes');
const sysPaiementRoutes = require('../routes/sysPaiementRoutes');
const rassembleRoutes = require('../routes/rassembleRoutes');
const realiseRoutes = require('../routes/realiseRoutes');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/commande', commandeRoutes);
app.use('/api/produit', produitRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/sysPaiement', sysPaiementRoutes);
app.use('/api/rassemble', rassembleRoutes);
app.use('/api/realise', realiseRoutes);

module.exports = app;