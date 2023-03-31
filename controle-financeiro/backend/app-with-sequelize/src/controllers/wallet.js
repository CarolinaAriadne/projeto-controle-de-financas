const Wallets = require('../services/wallet');

const getWallets = async (_req, res, next) => {
  try {
    const allWallets = await Wallets.getWallets();

    return res.status(200).json(allWallets);
  } catch (err) {
    next();
  }
};

module.exports = {
  getWallets,
};
