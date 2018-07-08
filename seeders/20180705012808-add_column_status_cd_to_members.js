'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'Members',
          'activated',
          {
              type: Sequelize.BOOLEAN,
              allowNull: false,
              defaultValue: false
          });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Members', 'activated')
  }
};
