import express from 'express';
import indexRoute from './index';
import mealsRoute from './meals';
import menuRoute from './menu';
import ordersRoute from './orders';

const app = express.Router();
indexRoute(app);
mealsRoute(app);
menuRoute(app);
ordersRoute(app);

module.exports = app;
