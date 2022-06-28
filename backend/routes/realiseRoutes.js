const express = require('express')
const router = express.Router();

const realiseCrtl = require('../controllers/realiseControllers');

router.get('/', realiseCrtl.getAllRealise);
router.post('/', realiseCrtl.createRealise);
router.get('/id', realiseCrtl.getRealiseByID);
router.get('/id', realiseCrtl.getRealiseByNumCommande);
router.delete('/id', realiseCrtl.deleteRealise);

module.exports = router;