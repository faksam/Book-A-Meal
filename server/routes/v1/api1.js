import express from 'express';
import mealsRoute from './meals';

const app = express.Router();
mealsRoute(app);
import menuRoute from './menu'
import ordersRoute from './orders';


const app = express.Router();
mealsRoute(app);
menuRoute(app);
ordersRoute(app);
module.exports = app;
