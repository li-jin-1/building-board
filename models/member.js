'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        },
        validate: {
            notEmpty: {
                args: true,
                msg: 'Email field cannot be empty.'
            },
            isEmail: {
                args: true,
                msg: 'Please enter a correct email address.'
            }
        }
    },
    username: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'This username exists. Please try another one.',
            fields: [sequelize.fn('lower', sequelize.col('email'))]
        },
        validate: {
            notEmpty: {
                args: true,
                msg: 'Username field cannot be empty.'
            },
            len: {
                args: [4, 15],
                msg: 'Username must be between 4-15 characters.'
            }
        }
    },
    hashed_password: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.VIRTUAL,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Password field cannot be empty.'
            },
            len: {
                args: [6, 30],
                msg: 'Password must be between 8-30 characters.'
            }
        }
    },
    passwordmatch: {
        type: new DataTypes.VIRTUAL,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Confirm password field cannot be empty.'
            },
            len: {
                args: [6, 30],
                msg: 'Password must be between 8-30 characters.'
            },
            isMatch: function (val) {
                if (val !== this.get('password')) {
                    throw new Error("Your confirm password field doesn't match your password field.")
                }
            }
        }
    }
  }, {

  });
  Member.associate = function(models) {
    // associations can be defined here
      Member.hook('beforeCreate', async (member, options) => {
          if(member.password){
              const hash = await bcrypt.hash(member.password, saltRounds);
              member.hashed_password = hash;
          }
      });

      Member.activeMember = async function () {
          this.activated = true;
      };

      Member.createOrAuthenticate = async function (params) {
          let member, initialized;
          try{
              [member, initialized] = await Member.findOrBuild({
                  where: {
                      email: params['email']
                  }
              });
              if(initialized){
                  member.setAttributes(params);
                  member.activeMember;
                  await member.save();
                  return [member.dataValues, null];
              }
              else{
                  return [null, [{path: 'email', message: 'Member with same email already exists.'}]];
              }
          }
          catch (e){
              return [null, e.errors];
          }


      };

      Member.authenticate = async function(email, password, done) {
          try {
              let member = await models.Member.findOne({where: {email: email}});
              let validPassword;
              let errors = {};
              if(member) {
                  validPassword = await member.validPassword(password);
              }
              else {
                  errors['email'] = 'Incorrect email';
              }
              if (!validPassword) {
                  errors['password'] = 'Incorrect password';
              }
              if (!member || !validPassword) {
                  return done(null, false,  { errors: errors });
              }
              if(member && validPassword) {
                  return done(null, member);
              }
          }
          catch (e) {
              return done(e);
          }
      };
  };

    Member.prototype.validPassword = async function (password) {
        try {
            return await bcrypt.compareSync(password, this.dataValues.hashed_password);
        }
        catch (e) {
            log.error(e)
        }
    };
  return Member;
};