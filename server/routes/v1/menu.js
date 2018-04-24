import menuCtrl from '../../controllers/menu';

module.exports = (app) => {
  app.route('/menu').get(menuCtrl.getMenu);
  app.route('/menu').post(menuCtrl.postMenu);
  app.route('/menu/:id').get(menuCtrl.getMenu);
  app.route('/menu/:id').delete(menuCtrl.deleteMenu);
  app.route('/menu/:id').put(menuCtrl.updateMenu);
};
