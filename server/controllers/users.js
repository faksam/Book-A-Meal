const User = require('../models').User;

export default class userController {
  static create(req, res) {
    return User
      .create({
        fullname: 'Fakunle Samuel',
        email: 'fakunlesamuel@gmail.com',
        phone_no: '07039248533',
        role: 'caterer',
        password: "Lifeisarace"
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }

  static findUserById(req, res) {
    return User
      .findAll({
        where: {
          id: 1
        }
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }

  static verrifyUser(email) {
    consol.log("in Verify user"+ email)
    return User
      .findAll({
        where: {
          email: "fakunlesamuel@gmail.com"
        }
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }
};