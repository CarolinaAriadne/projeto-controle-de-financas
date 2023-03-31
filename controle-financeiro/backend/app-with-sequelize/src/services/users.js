const { User } = require('../models');
const erroHandler = require('../middlewares/erroHandler');
const generateJWT = require('../utils/generateJWT');

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'senha' } });
  return allUsers;
};

const loginUser = async (email, senha) => {
  const user = await User.findOne({ where: { email, senha } });
  console.log(user, 'SERVICE ------')
  if (!user) {
    throw erroHandler(400, 'Invalids fields');
  }
  const returnToken = generateJWT.generateJWT(email);
  return returnToken;
};

module.exports = {
  getAllUsers,
  loginUser,
};
