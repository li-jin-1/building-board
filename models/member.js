'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
            fields: [sequelize.fn('lower', sequelize.col('email'))]
        }
    },
    username: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'This username exists. Please try another one.',
            fields: [sequelize.fn('lower', sequelize.col('email'))]
        }
    },
    password: DataTypes.STRING
  }, {

  });
  Member.associate = function(models) {
    // associations can be defined here
  };
  Member.createOrAuthenticate = async (params) => {
      return Member.findOrCreate({
          where: {
              email: params['email'],
              username: params['username']
          }
      })
          .spread(function(member, created) {
              console.log('in spread........')
             // return [member.dataValues, null];
          })
          .catch((err) => {
            //  return [null, err.errors[0]];
          });
  };
  return Member;
};