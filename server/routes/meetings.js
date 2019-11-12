const controller = require("../controllers/meetings");
const auth = require('../services/authentication');

module.exports = app => {
  // Thread endpoints
  app.get("/api/meetings", auth.validateToken,  controller.getAllMeetings);
  app.get("/api/meetings/:id", auth.validateToken,  controller.getMeetingById);
  };