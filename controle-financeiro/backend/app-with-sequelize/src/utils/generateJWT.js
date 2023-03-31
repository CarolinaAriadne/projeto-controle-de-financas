const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '90d',
  algorithm: 'HS256',
};

const generateJWT = (email) => {
  const token = jwt.sign({ data: { email } }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = {
  generateJWT,
};

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGFtaXJlc0B0YW1pcmVzLmNvbSJ9LCJpYXQiOjE2ODAyODEwODMsImV4cCI6MTY4ODA1NzA4M30.rTNGqPat-0J60gOjUKwm5Pzrvr1olDXRcqhmgK8z0n8"

// tamires