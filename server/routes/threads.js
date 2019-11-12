const controller = require("../controllers/threads");
const auth = require('../services/authentication');

module.exports = app => {
  // Thread endpoints
  app.post("/api/threads/", auth.validateToken, controller.postThread);
  app.get("/api/threads", auth.validateToken,  controller.getAllThreads);
  app.put("/api/threads/:id", auth.validateToken,  controller.updateThreadById);
  app.delete("/api/threads/:id", auth.validateToken,  controller.deleteThreadById);
  app.post("/api/threads/:id/comment", auth.validateToken,  controller.postCommentToThread);
};
