'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Accounts', [{
      id: 1,
      type: 'agency',
    }, {
      id: 2,
      debit: 0,
      credit: 0,
      type: 'agency',
    }, {
      id: 3,
      debit: 0,
      credit: 0,
      type: 'hotel',
    }, {
      id: 4,
      debit: 0,
      credit: 0,
      type: 'guest',
    },], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  }
};
