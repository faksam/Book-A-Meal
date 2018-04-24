import mealsCtrl from '../../controllers/meals';

module.exports = (app) => {
  app.route('/meals').get(mealsCtrl.getMeals);
};
