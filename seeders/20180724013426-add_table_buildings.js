'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Buildings', [{
          name: 'PARK PLACE TOWER',
          address: '655 W Irving Park Road, Chicago, IL 60613',
          streetNumber: '655',
          streetName: 'W Irving Park Road',
          city: 'Chicago',
          state: 'Illinois',
          zipcode: '60613',
          description: ''
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Buildings', null, {});
  }
};
