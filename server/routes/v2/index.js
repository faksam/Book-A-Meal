module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.send('Welcome to api/v2');
  });
};
