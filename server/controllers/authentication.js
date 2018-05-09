import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import config from '../../config';
import db from '../models';

const User = db.User;

const tokenForUser = (user) => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

const signin = (req, res, next) => {
    User
        .findAll({
            where: {
                email: req.body.email
            }
        })
        .then((user) => {
            bcrypt.compare(req.body.password, user[0].password)
                .then((validPassword) => {
                    if (validPassword) {
                        res.send({ token: tokenForUser(user[0]) });
                    } else { res.status(404).send({ error: 'User not found' }); }
                });
        });
}
const signup = (req, res, next) => {
    const {
        fullname, email, password
    } = req.body;
    const saltRounds = 12;
    if (!email || !password) {
        res.status(422).send({ error: 'You must provide an email and passord.' });
    }
    bcrypt.hash(password, saltRounds)
        .then(hash => User
            .create({
                fullname: fullname,
                email: email,
                phone_no: req.body.phone_no,
                role: 'customer',
                password: hash
            })
            .then((newUser) => {
                res.json({ token: tokenForUser(newUser) });
            })
            .catch((err) => {
                res.json({
                    error: 'Error saving user to database.',
                    details: err
                });
            }));
};

module.exports = { signup, signin };
