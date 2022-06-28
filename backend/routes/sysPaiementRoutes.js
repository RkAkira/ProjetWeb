const express = require('express')
const router = express.Router();

const sysPaiementCrtl = require('../controllers/sysPaiementControllers');

router.get('/', sysPaiementCrtl.getAllSysPaiement);
router.post('/', sysPaiementCrtl.createSysPaiement);
router.get('/id', sysPaiementCrtl.getSysPaiementByID_client);
router.put('/id', sysPaiementCrtl.updateSysPaiement);
router.delete('/id', sysPaiementCrtl.deleteSysPaiement);

module.exports = router;