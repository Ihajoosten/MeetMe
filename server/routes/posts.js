const controller = require('../controllers/posts');
const auth = require('../services/authentication');

module.exports = app => {
  // Thread endpoints
  app.post('/api/posts', auth.validateToken, controller.createPost);
  app.get('/api/posts', controller.getAllPosts);
  // app.put("/api/posts/:id", controller.updatePostById);
  app.delete("/api/posts/:id", auth.validateToken, controller.deletePostById);
};

// auth.validateToken -> authentication works, but for development not currently using
