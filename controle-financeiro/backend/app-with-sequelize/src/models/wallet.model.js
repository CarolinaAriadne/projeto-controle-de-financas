const WalletModel = (sequelize, DataTypes) => {
  const Wallet = sequelize.define(
    'Wallet',
    {
      id: { type: DataTypes.DECIMAL, primaryKey: true, autoIncrement: true },
      tipo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      valor: DataTypes.NUMBER,
    },
    {
      timestamps: false,
    },
  );

  return Wallet;
};

module.exports = WalletModel;
