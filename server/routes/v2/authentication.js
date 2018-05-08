import { verrifyUserExist } from '../../helpers/userValidator';
const passport = require('passport')

const Authentication = require('../../controllers/authentication')


const requireSignIn = passport.authenticate('local', {session: false})

module.exports = (app) => {
  app.post('/auth/signin', requireSignIn, Authentication.signin);
  app.post('/auth/signup', verrifyUserExist, Authentication.signup);
};
