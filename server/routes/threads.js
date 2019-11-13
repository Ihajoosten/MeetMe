const controller = require("../controllers/threads");
const auth = require("../services/authentication");

module.exports = app => {
  // Thread endpoints
  app.post("/api/threads/", auth.validateToken, controller.postThread);
  app.get("/api/threads", controller.getAllThreads);
  app.put("/api/threads/:id", controller.updateThreadById);
  app.delete("/api/threads/:id", controller.deleteThreadById);
  app.post("/api/threads/:id/comment", controller.postCommentToThread);
};

// auth.validateToken -> authentication works, but for development not currently using
