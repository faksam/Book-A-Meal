import ordersCtrl from '../../controllers/orders';
import { verifyOrderInput } from '../../helpers/validator';
import { authorizeAdmin, authorizeUser } from '../../middleware/authorize';


module.exports = (app) => {
  app.post('/orders', authorizeUser, verifyOrderInput, ordersCtrl.create);
  app.get('/orders', authorizeAdmin, ordersCtrl.list);
  app.put('/orders/:id', authorizeUser, ordersCtrl.update);
};
