
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Menu.associate = function (models) {
    // associations can be defined here
    Menu.hasMany(models.MenuDetail, {
      foreignKey: 'menuDetailsId',
      as: 'menuDetails',
    });
  };
  return Menu;
};
