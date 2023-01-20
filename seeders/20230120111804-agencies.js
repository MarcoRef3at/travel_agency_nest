'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trave_Agencies', [{
      id: 1,
      name: 'Guest Test',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trave_Agencies', null, {});
  }
};
