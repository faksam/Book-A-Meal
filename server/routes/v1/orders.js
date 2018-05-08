import ordersCtrl from '../../controllers/v1/orders';
import { verifyOrderInput } from '../../helpers/validator';

module.exports = (app) => {
  app.route('/orders').get(ordersCtrl.getOrders);
  app.post('/orders', verifyOrderInput, ordersCtrl.postOrder);
  app.route('/orders/:id').put(ordersCtrl.updateOrder);
};
