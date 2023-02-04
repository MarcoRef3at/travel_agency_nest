'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Agencies', [{
      id: 1,
      name: 'Me',
      account_id: 1,
    }, {
        id: 2,
      name: 'Agency Test',
      account_id: 2,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Agencies', null, {});
  }
};
