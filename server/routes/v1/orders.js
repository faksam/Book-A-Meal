import ordersCtrl from '../../controllers/orders';

module.exports = (app) => {
  app.route('/orders/:id').put(ordersCtrl.updateOrder);
};
