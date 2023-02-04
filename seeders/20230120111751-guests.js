'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Guests', [{
      id: 1,
      name: 'Guest Test',
      account_id: 4,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Guests', null, {});
  }
};
