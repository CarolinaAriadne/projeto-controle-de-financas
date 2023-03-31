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
    console.log(token, 'controller ------------')
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  loginUser,
};
