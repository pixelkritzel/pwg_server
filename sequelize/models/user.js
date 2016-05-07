'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    Email: DataTypes.STRING,
    PwHash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Service);
      }
    }
  });
  return User;
};