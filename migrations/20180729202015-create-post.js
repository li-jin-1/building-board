'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
        content: {
        type: Sequelize.TEXT
        },
      MemberId: {
          type: Sequelize.INTEGER
      },
        ContentThreadId: {
            type: Sequelize.INTEGER
        },
        draft: {
        type: Sequelize.BOOLEAN
        },
        deleted: {
        type: Sequelize.BOOLEAN
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};