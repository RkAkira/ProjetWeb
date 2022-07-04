const express = require('express');
const router = express.Router();

const adresseCtrl = require('../controllers/adresseControllers');

router.get('/', adresseCtrl.getAllAdresse);
router.post('/', adresseCtrl.createAdresse);
router.get('/id', adresseCtrl.getAdresseById);
router.put('/id', adresseCtrl.updateAdresse);
router.delete('/id', adresseCtrl.deleteAdresse);

module.exports = router;