const express = require('express')
const router = express.Router();

const userCrtl = require('../controllers/userControllers');

router.get('/', userCrtl.getAllUser);
router.post('/', userCrtl.createUser);
router.get('/id', userCrtl.getUserByID);
router.get('/id', userCrtl.getUserById_client);
router.put('/id', userCrtl.updateUserbyID);
router.put('/id', userCrtl.updateUserbyId_Client);
router.delete('/id', userCrtl.deleteUser);

module.exports = router;