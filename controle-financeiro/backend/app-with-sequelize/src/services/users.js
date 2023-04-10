const { User } = require('../models');
const erroHandler = require('../middlewares/erroHandler');
const generateJWT = require('../utils/generateJWT');

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'senha' } });
  return allUsers;
};

const loginUser = async (email, senha) => {
  const user = await User.findOne({ where: { email, senha } });

  if (!user) {
    throw erroHandler(400, 'Invalids fields');
  }
  const returnToken = generateJWT.generateJWT(email);
  return returnToken;
};

const getUserId = async id => {
  const userId = await User.findByPk(id, {
    attributes: { exclude: 'senha' },
  });

  if (!userId) {
    throw erroHandler('404', 'User does not exist');
  }

  return userId;
};

const createUser = async dados => {
  const newUser = await User.findOne({ where: { email: dados.email } });

  if (newUser) {
    throw erroHandler(409, 'User already exist');
  }

  await User.create(dados);

  const returnToken = generateJWT.generateJWT(dados.email);
  return returnToken;
};

const deleteUser = async id => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsers,
  loginUser,
  getUserId,
  createUser,
  deleteUser,
};
