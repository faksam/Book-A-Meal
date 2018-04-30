import mealsCtrl from '../../controllers/meals';

module.exports = (app) => {
  app.route('/meals').get(mealsCtrl.getMeals);
  app.route('/meals').post(mealsCtrl.postMeal);
  app.route('/meals/:id').get(mealsCtrl.getMeal);
  app.route('/meals/:id').delete(mealsCtrl.deleteMeal);
  app.route('/meals/:id').put(mealsCtrl.updateMeal);
};
