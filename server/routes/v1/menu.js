import menuCtrl from '../../controllers/menu';

module.exports = (app) => {
  app.route('/menu/:id').get(menuCtrl.getMenuItem);
};
