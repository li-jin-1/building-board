'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {

  });
  Member.associate = function(models) {
    // associations can be defined here
  };
  Member.createOrAuthenticate = (params) => {
      Member.findOrCreate({
          where: {
              email: params['email'],
              username: params['username']
          }
      })
          .spread(function(member, created) {
              return member.dataValues;
          })

  };
  return Member;
};