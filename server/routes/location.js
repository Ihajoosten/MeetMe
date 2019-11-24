const controller = require('../controllers/location');

module.exports = app => {
  // Location endpoint
  app.get('/api', controller.getMeta);
};
