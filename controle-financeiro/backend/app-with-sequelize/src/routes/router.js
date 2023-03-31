const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  loginUser,
  getUserId,
  createUser,
  deleteUser,
} = require('../controllers/users');
const { getWallets, getWalletId, createWallet } = require('../controllers/wallet');
const {
  validateUserLogin,
  validateDadosUser,
} = require('../middlewares/validateUser');
const { validateDadosWallet } = require('../middlewares/validateWallet');
const { verifyToken } = require('../middlewares/validateToken');

router.get('/users', getAllUsers);
router.post('/login', validateUserLogin, loginUser);
router.post('/register', validateDadosUser, createUser);
router.get('/user/:id', getUserId);
router.delete('/delete/:id', deleteUser);
router.get('/wallets', getWallets);
router.get('/wallet/:id', getWalletId);
router.post('/wallet', verifyToken,  createWallet);


module.exports = router;
