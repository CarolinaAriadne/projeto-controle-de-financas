const express = require('express');
const router = express.Router();

const { getAllUsers, loginUser, getUserId, createUser } = require('../controllers/users');
const { validateUserLogin, validateDadosUser } = require('../middlewares/validateUser');

router.get('/users', getAllUsers);
router.post('/login', validateUserLogin, loginUser);
router.post('/register', validateDadosUser, createUser);
router.get('/user/:id', getUserId);

module.exports = router;
