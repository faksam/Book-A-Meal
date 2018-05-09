
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  OrderDetail.associate = function (models) {
    // associations can be defined here
    OrderDetail.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'CASECADE',
      allowNull: false,
    });
    OrderDetail.belongsTo(models.Order, {
      foreignKey: 'orderId',
      onDelete: 'CASECADE',
      allowNull: false,
    });
  };
  OrderDetail.removeAttribute('id');
  return OrderDetail;
};
