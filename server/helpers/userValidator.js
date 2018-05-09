import db from '../models';

const User = db.User;

export const verrifyUserExist = (req, res, next) => {
  const { email } = req.body.email;

  const error = {};
  User.findAll({
    where: {
      email
    }
  })
    .then((user) => {
      if (user.length > 0) {
        error.user = 'This email already exist in our server try signing in';

        return res.status(400).json({ error });
      }
      return next();
    });
};

export const verrifyUserIsAdmin = (req, res, next) => {
  const { email } = req.body.email;

  const error = {};
  User.findAll({
    where: {
      email
    }
  })
    .then((user) => {
      if (user.length > 0) {
        error.user = 'This email already exist in our server try signing in';

        return res.status(400).json({ error });
      }
      return next();
    });
};
