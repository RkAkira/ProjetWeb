const express = require('express');
const router = express.Router();

const bienImmobilierCtrl = require('../controllers/bienImmobilierControllers');

router.get('/', bienImmobilierCtrl.getAllBienImmobilier);
router.get('/vente', bienImmobilierCtrl.getAllBienImmobilierVendu);
router.post('/', bienImmobilierCtrl.createBienImmobilier);
router.get('/id', bienImmobilierCtrl.getBienImmobilierById);
router.put('/id', bienImmobilierCtrl.updateBienImmobilierById);
router.delete('/id', bienImmobilierCtrl.deleteBienImmobilierById);

module.exports = router;