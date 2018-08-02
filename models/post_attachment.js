'use strict';
module.exports = (sequelize, DataTypes) => {
  var post_attachment = sequelize.define('post_attachment', {
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    postId: DataTypes.INTEGER
  }, {});
  post_attachment.associate = function(models) {
    // associations can be defined here
      post_attachment.belongsTo(models.post)
  };
  return post_attachment;
};