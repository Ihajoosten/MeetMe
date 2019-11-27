const controller = require('../controllers/meetings');
const auth = require('../services/authentication');

module.exports = app => {
  // Thread endpoints
  app.post('/api/meetings', auth.validateToken, controller.createMeeting);
  app.get('/api/meetings', controller.getAllMeetings);
  app.get('/api/meetings/:id', controller.getMeetingById);
  app.patch('/api/meetings/:id', auth.validateToken, controller.updateMeeting);
  app.delete('/api/meetings/:id', auth.validateToken, controller.deleteMeeting);

  app.post('/api/meetings/:id/join', auth.validateToken, controller.joinMeeting);
  app.post('/api/meetings/:id/leave', auth.validateToken, controller.leaveMeeting);

};
