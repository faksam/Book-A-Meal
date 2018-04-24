import ordersCtrl from '../../controllers/orders';

module.exports = (app) => {
  app.route('/orders').post(ordersCtrl.postOrder);
};
