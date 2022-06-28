const express = require('express')
const router = express.Router();

const adminCrtl = require('../controllers/adminControllers');

router.get('/', adminCrtl.getAllAdmin);
router.post('/', adminCrtl.createAdmin);
router.get('/id', adminCrtl.getAdminByID);
router.put('/id', adminCrtl.updateAdmin);
router.delete('/id', adminCrtl.deleteAdmin);

module.exports = router;