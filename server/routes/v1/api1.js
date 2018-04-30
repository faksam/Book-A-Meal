import express from 'express';
import ordersRoute from './orders';

const app = express.Router();
ordersRoute(app);

module.exports = app;
