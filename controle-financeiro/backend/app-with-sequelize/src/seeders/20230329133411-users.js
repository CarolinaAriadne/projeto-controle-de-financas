'use strict';

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('Users', [
      {
        nome: 'Tamires Santos',
        email: 'tamires@tamires.com',
        senha: 'tami123',
      },
      {
        nome: 'Pedro Siqueira',
        email: 'pedro@pedro.com',
        senha: 'pedro123',
      },
      {
        nome: 'Carla Cavalcanti',
        email: 'carla@carla.com',
        senha: 'caval123',
      },
    ]);
  },

  down: async queryInterface => {
    await queryInterface.bulkInsert('Users', null, {});
  },
};
