import express from 'express';
import mealsRoute from './meals';

const app = express.Router();
mealsRoute(app);
module.exports = app;
