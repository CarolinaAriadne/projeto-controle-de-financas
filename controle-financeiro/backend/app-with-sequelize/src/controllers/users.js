const Users = require('../services/users');

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await Users.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    next();
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, senha } = req.body;
    const token = await Users.loginUser(email, senha);
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = await Users.getUserId(id);
    return res.status(200).json(userId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  loginUser,
  getUserId,
};