const joi = require('joi');

const userValidate = joi.object({
  email: joi.string().required(),
  senha: joi.string().required(),
});

const validateUserLogin = (req, res, next) => {
  const { email, senha } = req.body;
  const { error } = userValidate.validate({ email, senha });

  if (error) {
    return res.status(400).json({
      message: 'Some required fields are missing or fields must be string',
    });
  }

  next();
};

module.exports = {
  validateUserLogin,
};
