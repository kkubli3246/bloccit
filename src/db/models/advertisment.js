'use strict';
module.exports = (sequelize, DataTypes) => {
  var Advertisment = sequelize.define('Advertisment', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Advertisment.associate = function(models) {
    // associations can be defined here
  };
  return Advertisment;
};