const express = require('express')
const router = express.Router();

const commandeCrtl = require('../controllers/commandeControllers');

router.get('/', commandeCrtl.getAllCommande);
router.post('/', commandeCrtl.createCommande);
router.get('/id', commandeCrtl.getCommandeByID);
router.get('/date', commandeCrtl.getCommandeByDate);
router.put('/id', commandeCrtl.updateCommandePrice);
router.put('/id', commandeCrtl.updateCommandeValide);
router.delete('/id', commandeCrtl.deleteCommande);

module.exports = router;