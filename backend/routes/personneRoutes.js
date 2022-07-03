const express = require('express');
const router = express.Router();

const personneCtrl = require('../controllers/personneControllers');

router.get('/', personneCtrl.getAllPersonne);
router.post('/', personneCtrl.createPersonne);
router.get('/id', personneCtrl.getPersonneById);
router.put('/id', personneCtrl.updatePersonneById);
router.delete('/id', personneCtrl.deletePersonneById);

module.exports = router;