'use strict';
module.exports = (sequelize, DataTypes) => {
  var MemberBuilding = sequelize.define('MemberBuilding', {
      MemberId: DataTypes.INTEGER,
      BuildingId: DataTypes.INTEGER,
      bio: DataTypes.TEXT,
      unit: DataTypes.STRING
  }, {});
  MemberBuilding.associate = function(models) {
    // associations can be defined here
  };
  return MemberBuilding;
};