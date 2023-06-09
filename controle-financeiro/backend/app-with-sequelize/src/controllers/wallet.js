const Wallets = require('../services/wallet');

const getWallets = async (_req, res, next) => {
  try {
    const allWallets = await Wallets.getWallets();

    return res.status(200).json(allWallets);
  } catch (err) {
    next();
  }
};

const getWalletId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const walletId = await Wallets.getWalletId(id);
    return res.status(200).json(walletId);
  } catch (err) {
    next(err);
  }
};

const createWallet = async (req, res, next) => {
  try {
    const { tipo, descricao, valor } = req.body;
    const newWallet = await Wallets.createWallet(tipo, descricao, valor);

    return res.status(201).json(newWallet);
  } catch (err) {
    next(err);
  }
};

const updateWallet = async (req, res, next) => {
  try {
    const { tipo, descricao, valor } = req.body;

    const { id } = req.params;
    const walletChanged = await Wallets.updateWallet(
      id,
      tipo,
      descricao,
      valor,
    );

    return res.status(200).json(walletChanged);
  } catch (err) {
    next(err);
  }
};

const deleteWallet = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Wallets.deleteWallet(id);

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getWallets,
  getWalletId,
  createWallet,
  updateWallet,
  deleteWallet,
};
