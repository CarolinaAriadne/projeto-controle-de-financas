const { User } = require('../models');

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'senha' } });
  return allUsers;
};

module.exports = {
  getAllUsers,
};
