const express = require('express');
const router = express.Router();

const { getAllUsers, loginUser, getUserId } = require('../controllers/users');
const { validateUserLogin } = require('../middlewares/validateUser');

router.get('/users', getAllUsers);
router.post('/login', validateUserLogin, loginUser);
router.get('/user/:id', getUserId);

module.exports = router;
