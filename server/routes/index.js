// import * as express from 'express';
// var usersRouter = require('./routes/v1/users');
// import usersRouter from './v1/users';

// import mealsRouter from './v1/meals';
// import menuRouter from './v1/menu';
// import ordersRouter from './v1/orders';


// export default function setRoutes(app) {
//   const router = express.Router();

//   // app.use('/users', usersRouter);
//   // app.use('/meals', mealsRouter);
//   // app.use('/menu', menuRouter);
//   // app.use('/orders', ordersRouter);

//   // Apply the routes to our application with the prefix /api
//   // app.use('/api', router);
// }

import express from 'express';
import path from 'path';
import apiv1 from './v1/api1';

const app = express();

app.use('/api/v1/', apiv1);

/* GET home page. */
app.use('*', (req, res, next) => {
  res.render(path.join(__dirname, '/UI/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error.', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
