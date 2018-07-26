'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('BuildingMember', [{
          BuildingId: 1,
          MemberId: 32,
          bio: "Hey, everyone, I'm new here!",
          unit: "1513"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('BuildingMember', null, {});

  }
};
