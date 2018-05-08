const passport = require('passport')
import config from '../../config';
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const { findUserById, verifyUser } = require('../controllers/users')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const User = require('../models').User

const env = process.env.NODE_ENV; // 'dev' or 'test'

//create local strategy

const localIptions = { usernameField: 'email' }

const localLogin = new LocalStrategy(localIptions, (email, password, done) => {
    console.log("in localLogin")
    return User
    .findAll({
      where: {
        email: email
      }
    })
        .then((user) => {
            console.log(user)
            console.log("in localLogin"+ user[0].email)
            console.log("in localLogin"+ user[0].email)
            console.log("in localLogin"+ user[0].password)
            bcrypt.compare(password, user[0].password)
                .then((validPassword) => {
                    console.log("in valid password")
                    if (validPassword) {
                        return done(null, user)
                    }
                    return done(null, false)
                })
                .catch(err => done(err, false))
        })
})

// setup options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), 
    secretOrKey: config.secret,
}

//create jwt Strategy
const jwtLogin = new JWTStrategy(jwtOptions, (payload, done) => {
    console.log("in jwtLogin")
    return findUserById(payload.sub)
        .then((foundUser) => {
            if (foundUser) {
                return done(null, foundUser)
            }
            return done(null, false)
        })
        .catch(err => done(err, false))
})

//tell passport to use this strategy.
passport.use(jwtLogin)
passport.use(localLogin)