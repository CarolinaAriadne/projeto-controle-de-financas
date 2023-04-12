'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Wallets', [
      {
        tipo: 'entrada',
        descricao: 'salário janeiro 2023',
        valor: 2500.0,
      },
      {
        tipo: 'entrada',
        descricao: 'salário fevereiro 2023',
        valor: 2500.0,
      },
      {
        tipo: 'entrada',
        descricao: 'salário março 2023',
        valor: 2500.0,
      },
    ]);
  },

  down: async queryInterface => {
    await queryInterface.bulkInsert('Wallets', null, {});
  },
};
