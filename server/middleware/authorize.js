import jwt from 'jwt-simple';
import config from '../../config';
import db from '../models';

const User = db.User;

export const authorizeAdmin = (req, res, next) => {
  let token;
  let decode;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer g1jipjgi1ifjioj
    // Handle token presented as a Bearer token in the Authorization header
    const authHeader = req.headers.authorization.split(' ');
    // token = authHeader[1];
    decode = jwt.decode(authHeader[1], config.secret);
  } else if (req.query && req.query.token) {
    // Handle token presented as URI param
    ({ token } = req.query);
    decode = jwt.decode(token, config.secret);
  } else if (req.cookies && req.cookies.token) {
    // Handle token presented as a cookie parameter
    ({ token } = req.cookies.token);
    decode = jwt.decode(token, config.secret);
  } 

  User.findAll({
    where: {
      id: parseInt(decode.sub, 10)
    }
  })
    .then((user) => {
      // console.log(user);
      if (user[0].role === 'caterer') { return next(); }
      res.send({ error: 'You are not authorized.' });
    });
};

export const authorizeUser = (req, res, next) => {
  let token;
  let decode;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer g1jipjgi1ifjioj
    // Handle token presented as a Bearer token in the Authorization header
    const authHeader = req.headers.authorization.split(' ');
    // token = authHeader[1];
    decode = jwt.decode(authHeader[1], config.secret);
  } else if (req.query && req.query.token) {
    // Handle token presented as URI param
    ({ token } = req.query);
    decode = jwt.decode(token, config.secret);
  } else if (req.cookies && req.cookies.token) {
    // Handle token presented as a cookie parameter
    ({ token } = req.cookies.token);
    decode = jwt.decode(token, config.secret);
  } else if (req.body && req.body.token) {
    // Handle token presented as a cookie parameter
    ({ token } = req.body.token);
    decode = jwt.decode(token, config.secret);
  }

  User.findAll({
    where: {
      id: parseInt(decode.sub, 10)
    }
  })
    .then(() => {
      return next()
    });
};
