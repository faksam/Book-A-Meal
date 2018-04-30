import express from 'express';
import mealsuRoute from './meals';
import menuRoute from './menu';
import ordersRoute from './orders';

const app = express.Router();
mealsuRoute(app);
menuRoute(app);
ordersRoute(app);

module.exports = app;
