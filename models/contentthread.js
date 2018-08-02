'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContentThread = sequelize.define('ContentThread', {
    type_cd: DataTypes.STRING,
      MemberId: {
          type: DataTypes.INTEGER
      },
      BuildingId: {
          type: DataTypes.INTEGER
      },
  }, {});
  ContentThread.associate = function(models) {
    // associations can be defined here
      ContentThread.belongsTo(models.Member);
      ContentThread.hasMany(models.post);
  };
  return ContentThread;
};