'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    title: DataTypes.STRING
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};