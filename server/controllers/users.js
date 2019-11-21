/* eslint-disable no-unused-vars */
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const auth = require('../services/authentication');

module.exports = {
  createUser: (req, res, next) => {
    const body = req.body;

    let user = new User({
      avatar: body.avatar,
      email: body.email,
      name: body.name,
      username: body.username,
      password: body.password
    });

    user.save((err, user) => {
      if (err) return res.status(422).json({ err });
      return res.status(201).json(user);
    });
  },
  updateUserByUsername: (req, res, next) => {
    const username = req.params.username;
    const body = req.body;
    User.findOneAndUpdate({ name: username }, body)
      .then(() => User.find({ name: username }))
      .then(user => {
        res.status(200).json({ result: user });
      });
  },
  deleteUserByUsername: (req, res, next) => {
    const username = req.params.username;
    let u;

    User.findOne({ name: username })
      .then(user => {
        u = user;
        User.findOneAndDelete({ name: username });
      })
      .then(() => {
        res.status(200).json({ result: u });
      });
  },
  loginUser: (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: body.message });
    }
    User.findOne({ email: req.body.email }, (error, user) => {
      if (error) {
        return res.status(500).json({
          message: 'Something went wrong on the server!',
          status: 500
        });
      }
      if (!user) {
        return res
          .status(401)
          .json({ message: 'Email does not match!', status: 401 });
      }

      const passwordMatch = User.passwordMatches(
        req.body.password,
        user.password
      );
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: 'Password does not match!', status: 401 });
      }
      const token = auth.generateJWT(user);
      return res.status(200).json({ token: token });
    });
  }
};
