import menuCtrl from '../../controllers/menu';
import { verifyMenuInput, verifyMenuGetInput } from '../../helpers/validator';
import { authorizeAdmin, authorizeUser } from '../../middleware/authorize';

const passport = require('passport');

const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.post('/menu', authorizeAdmin, verifyMenuInput, menuCtrl.create);
  app.get('/menu', authorizeUser, verifyMenuGetInput, menuCtrl.list);
};
