const joi = require('joi');

const verifyWallet = joi.object({
  tipo: joi.string().required(),
  descricao: joi.string().required(),
  valor: joi.number().required(),
});

const validateDadosWallet = (req, res, next) => {
  const { tipo, descricao, valor } = req.body;
  const { error } = verifyWallet.validate({ tipo, descricao, valor });

  if (error) {
    return res.status(400).json({
      message: 'Some required fields are missing or fields must be string',
    });
  }

  next();
};

module.exports = {
  validateDadosWallet,
};
