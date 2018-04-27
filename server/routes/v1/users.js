import usersCtrl from '../../controllers/users';

module.exports = (app) => {
  app.route('/users').get(usersCtrl.getUsers);
  app.route('/users').post(usersCtrl.postUser);
  app.route('/users/:id').get(usersCtrl.getUser);
  app.route('/users/:id').delete(usersCtrl.deleteUser);
  app.route('/users/:id').put(usersCtrl.updateUser);
};
