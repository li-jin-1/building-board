'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.connection.query([
      "CREATE TABLE members(",
      "id INT NOT NULL AUTO_INCREMENT,",
      "username varchar(255) NULL,",
      "name varchar(255) NULL,",
      "email varchar(255) NULL,",
      "updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),",
      "created_at TIMESTAMP NOT NULL,",
      "PRIMARY KEY(id)",
      ")"
  ].join(" "));
  return null;
};

exports.down = function(db) {
  return db.dropTable('members');
};

exports._meta = {
  "version": 1
};
