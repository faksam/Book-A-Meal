
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('OrderDetails', {
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    mealId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      onDelete: 'CASCADE',
      references: {
        model: 'Meals',
        key: 'id',
        as: 'mealId',
      },
    },
    orderId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      onDelete: 'CASCADE',
      references: {
        model: 'Orders',
        key: 'id',
        as: 'oderId',
      },
    },
  }),
  down: queryInterface =>
    queryInterface.dropTable('OrderDetails')
};
