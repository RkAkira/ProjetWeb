const express = require('express')
const router = express.Router();

const userCrtl = require('../controllers/userControllers');

router.get('/', userCrtl.getAllUser);
router.post('/', userCrtl.createUser);
router.get('/id', userCrtl.getUserByID);
router.get('/mail', userCrtl.getUserByEmail);
router.put('/id', userCrtl.updateUserbyID);
router.delete('/id', userCrtl.deleteUser);

module.exports = router;