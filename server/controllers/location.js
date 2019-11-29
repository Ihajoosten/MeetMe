const geoip = require('geoip-lite');
// Run 'npm run-script updatedb' to update the data file
const request = require('request');

exports.getMeta = async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    const ip = await req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);
    return res.json(geo);
  } else {
    request('https://api.ipify.org?format=json', async (error, response) => {
      if (!error && response.statusCode == 200) {
          const ip = await JSON.parse(response.body).ip;
          const geo = geoip.lookup(ip);
          return res.status(200).json(geo);
      } else {
        return res.send(422).send({errors: 'Cannot get location from IP'})
      }
    })
  }
}
