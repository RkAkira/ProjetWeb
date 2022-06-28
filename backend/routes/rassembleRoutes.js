const express = require('express')
const router = express.Router();

const rassembleCrtl = require('../controllers/rassembleControllers');

router.get('/', rassembleCrtl.getAllRassemble);
router.post('/', rassembleCrtl.createRassemble);
router.get('/id', rassembleCrtl.getRassemble);
router.put('/id', rassembleCrtl.updateRassemble);
router.delete('/id', rassembleCrtl.deleteRassemble);

module.exports = router;