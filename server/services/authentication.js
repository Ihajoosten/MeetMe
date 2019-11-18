const jwt = require('jsonwebtoken');
const logger = require('../config/prod').logger;

module.exports = {
  generateJWT: user => {
    //const tokenData = { username: user.username, id: user.id, email: user.email };
    return jwt.sign({ user }, 'token');
  },
  decodeToken: req => {
    const token = req.headers['authorization'].replace(/^JWT\s/, '');
    if (!token) {
      logger.error('invalid token');
      return null;
    }

    try {
      const payload = jwt.decode(token);
      return payload;
    } catch (error) {
      logger.error(error);
      return null;
    }
  },
  requireLogin: (req, res, next) => {
    const token = this.decodeToken(req);
    if (!token) {
      return res.status(401).json({ message: 'You must be logged in.' });
    }
    next();
  },
  getUsername: req => {
    const token = this.decodeToken(req);
    if (!token) {
      return null;
    }
    return token.user.username;
  },

  getUserId: req => {
    const token = this.decodeToken(req);
    if (!token) {
      return null;
    }
    return token.user.id;
  },

  getUser: req => {
    const token = this.decodeToken(req);
    if (!token) {
      return null;
    }
    return token.user;
  },

  validateToken: (req, res, next) => {
    logger.info('validateToken aangeroepen');
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      logger.warn('Validate token failed! No authorization header');
      return res.status(401).json({ message: 'No authorization header' });
    }
    const token = authHeader.substring(7, authHeader.length);
    jwt.verify(token, 'token', err => {
      if (err) {
        logger.warn('Validate token failed! Not Authorized ');
        next({
          message: 'not authorized',
          code: 401
        });
      }
      const payload = jwt.decode(token);

      if (payload.user.username && payload.user._id) {
        req.userId = payload.user._id;
        req.username = payload.user.username;
        req.token = token;
        next();
      } else {
        logger.warn('Validate token failed! No user id');
        next({ message: 'Missing user id', code: 404 });
      }
    });
  }
};
