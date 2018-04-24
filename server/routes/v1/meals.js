import mealsCtrl from '../../controllers/meals';

module.exports = (app) => {
  app.route('/meals').post(mealsCtrl.postMeal);
};
