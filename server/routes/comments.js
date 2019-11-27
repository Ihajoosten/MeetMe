const controller = require("../controllers/comments");
const auth = require('../services/authentication');

module.exports = app => {
  // Comment endpoints
  app.post("/api/comments", auth.validateToken,  controller.postComment);
  app.get("/api/comments", auth.validateToken,  controller.getAllComments);
  app.put("/api/comments/:id", auth.validateToken,  controller.updateCommentById);
  app.delete("/api/comments/:id", auth.validateToken,  controller.deleteCommentById);
};
