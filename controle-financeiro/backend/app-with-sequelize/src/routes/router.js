const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  loginUser,
  getUserId,
  createUser,
  deleteUser,
} = require('../controllers/users');
const { getWallets } = require('../controllers/wallet');
const {
  validateUserLogin,
  validateDadosUser,
} = require('../middlewares/validateUser');

router.get('/users', getAllUsers);
router.post('/login', validateUserLogin, loginUser);
router.post('/register', validateDadosUser, createUser);
router.get('/user/:id', getUserId);
router.delete('/delete/:id', deleteUser);
router.get('/wallets', getWallets);


module.exports = router;
