'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      hashed_password: {
        type: Sequelize.STRING
      },
        activated: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addIndex('Members', ['email', 'username']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Members');
  }
};