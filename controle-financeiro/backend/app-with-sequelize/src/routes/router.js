const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  loginUser,
  getUserId,
  createUser,
  deleteUser,
} = require('../controllers/users');
const {
  getWallets,
  getWalletId,
  createWallet,
  updateWallet,
  deleteWallet,
} = require('../controllers/wallet');
const {
  validateUserLogin,
  validateDadosUser,
} = require('../middlewares/validateUser');
const { validateDadosWallet } = require('../middlewares/validateWallet');
const { verifyToken } = require('../middlewares/validateToken');

router.get('/users', verifyToken,  getAllUsers);
router.post('/login', validateUserLogin, loginUser);
router.post('/register', validateDadosUser, createUser);
router.get('/user/:id', verifyToken,  getUserId);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/wallets', verifyToken, getWallets);
router.get('/wallet/:id', verifyToken, getWalletId);
router.post('/wallet', verifyToken, validateDadosWallet, createWallet);
router.put('/updatewallet/:id', verifyToken, updateWallet);
router.delete('/deletew/:id', verifyToken ,deleteWallet);

module.exports = router;
