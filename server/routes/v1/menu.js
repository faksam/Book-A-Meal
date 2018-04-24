import menuCtrl from '../../controllers/menu';

module.exports = (app) => {
  app.route('/menu').post(menuCtrl.postMenu);
  app.route('/menu/:id').put(menuCtrl.updateMenu);
};
