import ordersCtrl from '../../controllers/orders';
import { verifyOrderInput } from '../../helpers/validator';


module.exports = (app) => {
  app.post('/orders', verifyOrderInput, ordersCtrl.create);
  app.get('/orders', ordersCtrl.list);
  app.put('/orders/:id', ordersCtrl.update);
};
