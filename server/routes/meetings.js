const controller = require('../controllers/meetings');
const auth = require('../services/authentication');

module.exports = app => {
  // Thread endpoints
  app.post('/api/meetings', auth.validateToken, controller.createMeeting);
  app.get('/api/meetings', controller.getAllMeetings);
  app.get('/api/meetings/:id', controller.getMeetingById);

  app.post('/api/meetings/:id/join', auth.validateToken, controller.joinMeeting);
  app.post('/api/meetings/:id/leave', auth.validateToken, controller.leaveMeeting);
};

// auth.validateToken -> authentication works, but for development not currently using
