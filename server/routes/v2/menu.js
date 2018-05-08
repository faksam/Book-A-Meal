import menuCtrl from '../../controllers/menu';
const passport = require('passport')
import { verifyMenuInput, verifyMenuGetInput } from '../../helpers/validator';

const requireSignIn = passport.authenticate('local', {session: false})

module.exports = (app) => {
  app.post('/menu', requireSignIn, verifyMenuInput, menuCtrl.create);
  app.get('/menu', verifyMenuGetInput, menuCtrl.list);
};
