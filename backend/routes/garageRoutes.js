const express = require('express');
const router = express.Router();

const garageCtrl = require('../controllers/garageControllers');

router.get('/', garageCtrl.getAllGarage);
router.post('/', garageCtrl.createGarage);
router.get('/id', garageCtrl.getGarageById);
router.put('/id', garageCtrl.updateGarageById);
router.delete('/id', garageCtrl.deleteGarageById);

module.exports = router;