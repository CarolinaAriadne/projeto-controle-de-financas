const { Wallet } = require('../models');

const getWallets = async () => {
  const allWallets = await Wallet.findAll();

  return allWallets;
};

module.exports = {
  getWallets,
};
