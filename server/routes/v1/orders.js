import ordersCtrl from '../../controllers/orders';

module.exports = (app) => {
  app.route('/orders').get(ordersCtrl.getOrders);
};
