'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuDetail = sequelize.define('MenuDetail', {

  });
  MenuDetail.associate = function(models) {
    // associations can be defined here
    MenuDetail.belongsTo(models.Menu, {
      foreignKey: 'menuId',
      onDelete: 'CASECADE',
      allowNull: false,
    });    
    MenuDetail.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'CASECADE',
      allowNull: false,
    });    
  };
  MenuDetail.removeAttribute('id');
  return MenuDetail;
};