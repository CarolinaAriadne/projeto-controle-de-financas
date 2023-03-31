const express = require('express');
const router = express.Router();

const { getAllUsers, loginUser } = require('../controllers/users');
const { validateUserLogin } = require('../middlewares/validateUser');

router.get('/users', getAllUsers);
router.post('/login', validateUserLogin, loginUser);

module.exports = router;
