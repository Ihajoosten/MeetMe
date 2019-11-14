/* eslint-disable no-unused-vars */
const User = require("../models/users");
const bcrypt = require("bcrypt");
const auth = require("../services/authentication");

module.exports = {
  createUser: (req, res, next) => {
    const body = req.body;

    let user = new User({
      avatar: body.avatar,
      email: body.email,
      name: body.name,
      username: body.username,
      password: body.password,
    });

    user.save().then(() => res.status(200).json({ result: "OK" }));
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
  loginUser: (req, res, next) => {
    const body = req.body;

    User.findOne({ email: body.email }).then(user => {
      if (!bcrypt.compareSync(body.password, user.password)) {
        let errorObj = {
          message: "Login not correct",
          code: 400
        };
        next(errorObj);
      } else {
        const token = auth.generateJWT(user);
        res.status(200).json({ token: token });
      }
    });
  } 
};
