import express from 'express';
import mealsRoute from './meals';
import menuRoute from './menu';
import ordersRoute from './orders';

const app = express.Router();
mealsRoute(app);
menuRoute(app);
ordersRoute(app); 
module.exports = app;
