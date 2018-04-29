import express from 'express';
import path from 'path';


const app = express();


/* GET home page. */
app.get('/', (req, res, next) => {
  res.render(path.join(__dirname, '/index.html'));
});


module.exports = app;
