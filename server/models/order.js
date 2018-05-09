
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'customerId',
      onDelete: 'CASECADE',
    });
  };
  return Order;
};
