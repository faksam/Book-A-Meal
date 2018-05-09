
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Meal.associate = function (models) {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreignKey: 'catererId',
      onDelete: 'CASECADE',
    });
    // Meal.hasMany(models.OrderDetail, {
    //   foreignKey: 'orderDetailId',
    //   as: 'orderDetail',
    // });
    // Meal.hasMany(models.MenuDetail, {
    //   foreignKey: 'menuDetailsId',
    //   as: 'menuDetails',
    // });
  };
  return Meal;
};
