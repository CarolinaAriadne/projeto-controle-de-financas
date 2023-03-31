const Users = require('../services/users');

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await Users.getAllUsers();
    console.log(users)
    return res.status(200).json(users);
  } catch (err) {
    next();
  }
};

module.exports = {
    getAllUsers,
  };