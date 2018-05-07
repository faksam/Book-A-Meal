import mealsCtrl from '../../controllers/v1/meals';
import { verifyMealInput } from '../../helpers/validator';

module.exports = (app) => {
  app.post('/meals', verifyMealInput, mealsCtrl.postMeal);
  app.get('/meals', mealsCtrl.getMeals);
  app.get('/meals/:id', mealsCtrl.getMeal);
  app.delete('/meals/:id', mealsCtrl.deleteMeal);
  app.put('/meals/:id', verifyMealInput, mealsCtrl.updateMeal);
};
