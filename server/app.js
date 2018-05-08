import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import apiv1 from './routes/v1/api1';
import apiv2 from './routes/v2/api2';
import authentication from './controllers/authentication';
import passport from 'passport';
import passportService from './services/passport';

const requireAuth = passport.authenticate('jwt', {session: false});

const app = express();

// Start server
const PORT = process.env.PORT || 3456;
app.listen(PORT, () => {
  // console.log(`The app is running on port ${PORT}`);
});

app.set('views', path.join(__dirname, '../UI'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// change  template or public folder
app.use(express.static(path.join(__dirname, '../UI')));

// // Require static assets from template folder
app.use('../UI', express.static(path.join(`${__dirname}../UI`)));

app.use('/api/v2/', apiv2);

app.use('/api/v1/', apiv1);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status);
  res.render('error');
});

module.exports = app;
