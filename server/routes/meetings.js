const controller = require("../controllers/meetings");
// const auth = require('../services/authentication');

module.exports = app => {
  // Thread endpoints
  app.post("/api/meetings",  controller.createMeeting);
  app.get("/api/meetings",  controller.getAllMeetings);
  app.get("/api/meetings/:id",  controller.getMeetingById);
  };

  // auth.validateToken -> authentication works, but for development not currently using