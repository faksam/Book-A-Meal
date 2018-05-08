import jwt from 'jwt-simple';
import config from '../config/config';
import bcrypt from 'bcrypt';
const User = require('../models').User;

const tokenForUser = (user) => {
    const timestamp = new Date().getTime()
        return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

const signin = (req, res, next) => {
    console.log("in signin")
    console.log(req.body)
    res.send({ token: tokenForUser(req.body)})
}
const signup = (req, res, next) => {
    const { fullname , email, phone_no, password} = req.body;
    console.log("2before return user")
    console.log(req.body.email)
    console.log(req.body.password)
    const saltRounds = 12;
    if(!email || !password) {
        res.status(422).send({error: 'You must provide an email and passord.'});
    }
    console.log(password)
    bcrypt.hash(password,saltRounds)
        .then((hash) => {
            console.log("before return user")
            console.log(fullname,email,phone_no,hash)
            return User
            .create({
              fullname: fullname,
              email: email,
              phone_no: phone_no,
              role: 'customer',
              password: hash
            })
              .then((newUser) => {
                  res.json({token: tokenForUser(newUser)})
              })
              .catch((err) => {
                  res.json({error: 'Error saving user to database.'})
              })
        })
        .catch((err) => {
            return next(err)
        })
}

module.exports = { signup, signin }