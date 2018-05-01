import menuCtrl from '../../controllers/menu';

module.exports = (app) => {
  app.route('/menu/').get(menuCtrl.getMenu);
  app.route('/menu').post(menuCtrl.postMenu);
};
