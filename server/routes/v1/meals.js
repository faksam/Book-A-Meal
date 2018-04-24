import mealsCtrl from '../../controllers/meals';

module.exports = (app) => {
  app.route('/meals/:id').delete(mealsCtrl.deleteMeal);
};
