'use strict';
module.exports = (sequelize, DataTypes) => {
  var Building = sequelize.define('Building', {
    name: DataTypes.STRING
  }, {});
  Building.associate = function(models) {
    // associations can be defined here
      Building.belongsToMany(models.Member, {through: 'BuildingMember'});
  };
  return Building;
};