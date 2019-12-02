const controller = require('../controllers/users');
const auth = require('../services/authentication');

module.exports = app => {
  // User endpoints
  app.delete('/api/users/:id', auth.validateToken, controller.deleteUserByUsername);
  app.post('/api/users/login', controller.loginUser);
  app.post('/api/users/register', controller.createUser);
  app.get('/api/users/account', auth.validateToken, controller.getUserActivity);
  app.patch('/api/users/account/:id', auth.validateToken, controller.updateUser);
  app.patch('/api/users/change-password', controller.changePassword);
};
