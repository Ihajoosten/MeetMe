const controller = require("../controllers/users");
const auth = require('../services/authentication');

module.exports = app => {
  // User endpoints
  app.post("/api/users", auth.validateToken,  controller.createUser);
  app.put("/api/users/:id", auth.validateToken,  controller.updateUserByUsername);
  app.delete("/api/users/:id", auth.validateToken,  controller.deleteUserByUsername);
  app.post('/api/users/login', controller.loginUser);
};