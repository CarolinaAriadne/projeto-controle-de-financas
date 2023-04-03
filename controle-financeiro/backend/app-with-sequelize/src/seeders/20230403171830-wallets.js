'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Wallets', [
      {
        tipo: 'entrada',
        descricao: 'salário janeiro 2023',
        valor: 2500.00,
      },
      {
        tipo: 'entrada',
        descricao: 'salário fevereiro 2023',
        valor: 2500.00,
      },
      {
        tipo: 'entrada',
        descricao: 'salário março 2023',
        valor: 2500.00,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkInsert('Wallets', null, {});
  }
};