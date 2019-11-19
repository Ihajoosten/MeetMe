const logger = require('../config/prod').logger;

module.exports = io => {
  io.on('connection', socket => {
    logger.info('Connection has been established');

    socket.on('meeting/subscribe', meetingId => {
      logger.info('Joining meeting', `meeting-${meetingId}`);
      socket.join(`meeting-${meetingId}`);
    });

    socket.on('meeting/unsubscribed', meetingId => {
      logger.info('Leaving meeting', `meeting-${meetingId}`);
      socket.leave(`meeting-${meetingId}`);
    });

    socket.on('meeting/postSave', post => {
      logger.info('Emitting to meeting', `meeting-${post.meeting}`);
      console.log(post);
      socket.to(`meeting-${post.meeting}`).emit('meeting/postPublished', post);
    });
  });
};
