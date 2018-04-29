import express from 'express';
import mealsRoute from './meals';
import ordersRoute from './orders';

const app = express.Router();
ordersRoute(app);
mealsRoute(app);

module.exports = app;
