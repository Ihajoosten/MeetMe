module.exports = {
  DB_URI:
    'mongodb+srv://lhajoost:Kaya1412@meetme-iunko.mongodb.net/MeetMeDatabase?retryWrites=true&w=majority',
  logger: require('tracer').colorConsole({
    format: [
      '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})', //default format
      {
        error: '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})' // error format
      }
    ],
    dateformat: 'HH:MM:ss.L',
    preprocess: (data) => {
      data.title = data.title.toUpperCase();
    },
    level: process.env.LOG_LEVEL || 'trace'
  })
};
