const express = require('express');
const router = express.Router();

const transactionCtrl = require('../controllers/transactionControllers');

router.get('/', transactionCtrl.getAllTransaction);
router.post('/', transactionCtrl.createTransaction);
router.get('/count', transactionCtrl.getCountFromTransaction);
router.get('/sumPrice', transactionCtrl.getSumPriceFromTransaction);
router.get('/sumCommission', transactionCtrl.getSumOfCommission);
router.get('/derniere_vente', transactionCtrl.getDateLastTransaction);

module.exports = router;