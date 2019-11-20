const logger = require('../config/prod').logger;

module.exports = function(io) {
  io.on('connection', function(socket) {
    logger.info('Connection has been established');

    socket.on('meeting/subscribe', function(meetingId) {
      logger.info('Joining meeting', `meeting-${meetingId}`);
      socket.join(`meeting-${meetingId}`);
    });

    socket.on('meeting/unsubscribed', function(meetingId) {
      logger.info('Leaving meeting', `meeting-${meetingId}`);
      socket.leave(`meeting-${meetingId}`);
    });

    socket.on('meeting/postSave', function(post) {
      logger.info('Emitting to meeting', `meeting-${post.meeting}`);
      socket.to(`meeting-${post.meeting}`).emit('meeting/postPublished', post);
    });
  });
};
