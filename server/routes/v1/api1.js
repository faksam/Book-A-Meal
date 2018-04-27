import express from 'express';
import mealsRoute from './meals';
import menuRoute from './menu';
import ordersRoute from './orders';
import usersRoute from './users';

const app = express.Router();
mealsRoute(app);
menuRoute(app);
ordersRoute(app);
usersRoute(app);
module.exports = app;
