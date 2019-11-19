const logger = require('../config/prod').logger;
module.exports = io => {
  io.on('connection', (socket) => {
    logger.info('Connection has been established');

    socket.on('meeting/postSave', (post) => {
        io.emit('meeting/postPublished', post)
    })
  })
};
