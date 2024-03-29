module.exports = {
  DB_URI: process.env.DB_URI,
  logger: require('tracer').colorConsole({
    format: [
      '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})', //default format
      {
        error: '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})' // error format
      }
    ],
    dateformat: 'HH:MM:ss.L',
    preprocess: function(data) {
      data.title = data.title.toUpperCase();
    },
    level: process.env.LOG_LEVEL || 'trace'
  })
};
