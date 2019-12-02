module.exports = io => {
    io.on('connection', socket => {
      console.log('connection has been established')
  
      socket.on('meeting/subscribe', meetingId => {
        console.log('joining meeting ', `meeting-${meetingId}`);
        socket.join(`meeting-${meetingId}`);
      })
  
      socket.on('meeting/unsubscribe', meetingId => {
        console.log('leaving meeting ', `meeting-${meetingId}`);
        socket.leave(`meeting-${meetingId}`);
      })
  
      socket.on('meeting/postSaved', post => {
        console.log('emitting to meeting', `meeting-${post.meeting}`)
        socket.to(`meeting-${post.meeting}`).emit('meeting/postPublished', post)
      })
  
    })
  }