import mealsCtrl from '../../controllers/meals';
import { verifyMealInput } from '../../helpers/validator';
import { authorizeAdmin } from '../../middleware/authorize';

module.exports = (app) => {
  app.post('/meals', authorizeAdmin, verifyMealInput, mealsCtrl.create);
  app.get('/meals', authorizeAdmin, mealsCtrl.list);
  app.delete('/meals/:id', authorizeAdmin, mealsCtrl.destroy);
  app.put('/meals/:id', authorizeAdmin, verifyMealInput, mealsCtrl.update);
};
