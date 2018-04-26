import express from 'express';
import menuRoute from './menu';

const app = express.Router();
menuRoute(app);
module.exports = app;
