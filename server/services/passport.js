import passport from 'passport';
import bcrypt from 'bcrypt';
import config from '../../config';
import db from '../models';

const { Strategy: JWTStrategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const { findUserById } = require('../controllers/users');
const User = db.User;


// create local strategy

const localIptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localIptions, (email, password, done) => {
  return User
  .findAll({
    where: {
      email: email
    }
  })
  .then((user) => {
    console.log("bcrypt compare")
    bcrypt.compare(password, user[0].password)
      .then((validPassword) => {
        if (validPassword) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => done(err, false));
  })
});

// setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// create jwt Strategy
const jwtLogin = new JWTStrategy(jwtOptions, (payload, done) => {
 return findUserById(payload.sub)
  .then((foundUser) => {
    if (foundUser) {
      return done(null, foundUser);
    }
    return done(null, false);
  })
  .catch(err => done(err, false))
});

// tell passport to use this strategy.
passport.use(jwtLogin);
passport.use(localLogin);
