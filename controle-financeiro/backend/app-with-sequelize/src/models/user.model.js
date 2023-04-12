'use strict';

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.DECIMAL, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  return User;
};

module.exports = UserModel;
