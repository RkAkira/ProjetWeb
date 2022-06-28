const express = require('express')
const router = express.Router();

const clientCrtl = require('../controllers/clientControllers');

router.get('/', clientCrtl.getAllClient);
router.post('/', clientCrtl.createClient);
router.get('/id', clientCrtl.getClientByID);
router.put('/id', clientCrtl.updateClient);
router.delete('/id', clientCrtl.deleteClient);

module.exports = router;