import ordersCtrl from '../../controllers/orders';

module.exports = (app) => {
  app.route('/orders').get(ordersCtrl.getOrders);
  app.route('/orders').post(ordersCtrl.postOrder);
  app.route('/orders/:id').get(ordersCtrl.getOrder);
  app.route('/orders/:id').delete(ordersCtrl.deleteOrder);
  app.route('/orders/:id').put(ordersCtrl.updateOrder);
};
