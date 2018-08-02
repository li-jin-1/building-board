'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Post title field cannot be empty.'
            }
        }
    },
    content: {
        type: DataTypes.TEXT
    },
      MemberId: {
          type: DataTypes.INTEGER
      },
      ContentThreadId: {
          type: DataTypes.INTEGER
      },
      draft: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
      },
      deleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  }, {});
  post.associate = function(models) {
    // associations can be defined here
      post.belongsTo(models.ContentThread);
      post.belongsTo(models.Member);
      post.hasMany(models.post_attachment);

      post.createDraft = async function(params){
        try {
            return [await post.create(params), null];
        }
        catch (e){
            return [null, e.errors];
        }
      }
  };
  return post;
};