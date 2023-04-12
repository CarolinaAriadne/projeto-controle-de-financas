const { Wallet } = require('../models');
const erroHandler = require('../middlewares/erroHandler');

const getWallets = async () => {
  const allWallets = await Wallet.findAll();
  return allWallets;
};

const getWalletId = async id => {
  const walletId = await Wallet.findByPk(id);

  if (!walletId) {
    throw erroHandler('404', 'Wallet does not exist');
  }

  return walletId;
};

const createWallet = async (tipo, descricao, valor) => {
  const newWallet = await Wallet.create({ tipo, descricao, valor });

  return newWallet;
};

const updateWallet = async (id, tipo, descricao, valor) => {
  const wallet = await Wallet.findByPk(id);

  if (!wallet) {
    throw erroHandler(404, 'Wallet not found');
  }

  const updatedWallet = await Wallet.update(
    { tipo, descricao, valor },
    { where: { id } },
  );
  return updatedWallet;
};

const deleteWallet = async id => {
  await Wallet.destroy({ where: { id } });
};

module.exports = {
  getWallets,
  getWalletId,
  createWallet,
  updateWallet,
  deleteWallet,
};
