import mealsCtrl from '../../controllers/meals';
import { verifyMealInput } from '../../helpers/validator';

module.exports = (app) => {
  app.post('/meals', verifyMealInput, mealsCtrl.create);
  app.get('/meals', mealsCtrl.list);
  app.delete('/meals/:id', mealsCtrl.destroy);
  app.put('/meals/:id', verifyMealInput, mealsCtrl.update);
};
