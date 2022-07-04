const express = require('express');
const router = express.Router();

const visiteCtrl = require('../controllers/visiteControllers');

router.get('/', visiteCtrl.getAllVisite);
router.post('/', visiteCtrl.createVisite);

module.exports = router;