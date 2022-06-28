const express = require('express')
const router = express.Router();

const produitCrtl = require('../controllers/produitControllers');

router.get('/', produitCrtl.getAllProduit);
router.post('/', produitCrtl.createProduit);
router.get('/id', produitCrtl.getProduitByID);
router.put('/id', produitCrtl.updateProduit);
router.delete('/id', produitCrtl.deleteProduit);

module.exports = router;