/* eslint-disable no-unused-vars */
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const auth = require('../services/authentication');
const Meeting = require('../models/meetings');
const Thread = require('../models/threads');
const Post = require('../models/posts');
const Category = require('../models/categories');

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
  },
  getUserActivity: (req, res) => {
    const userId = req.user._id;
  
    Promise.all([
      fetchMeetingsByUserQuery(userId),
      fetchThreadsByUserQuery(userId),
      fetchPostByUserQuery(userId)
    ])
      // Writing [] to get data from the array
      .then(([meetings, threads, posts]) => res.json({ meetings, threads, posts }))
      .catch(err => {
        console.log(err);
        res.status(422).send({ err });
      });
  },
  updateUser: (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const user = req.user;
  
    if (user.id === userId) {
      // new: bool - true to return the modified document rather than the original. defaults to false
      User.findByIdAndUpdate(
        userId,
        { $set: userData },
        { new: true },
        (errors, updatedUser) => {
          if (errors) return res.status(422).send({ errors });
          return res.json(updatedUser);
        }
      );
    } else {
      return res.status(422).send({ errors: 'Authorization Error!' });
    }
  }
};

function fetchMeetingsByUserQuery(userId) {
  return Meeting.aggregate([
    {
      $facet: {
        meetings: [
          { $match: { author: userId } },
          { $limit: 5 },
          { $sort: { createdAt: -1 } }
        ],
        meetingsCount: [
          { $match: { author: userId } },
          { $count: 'count' }
        ]
      }
    }
  ])
    .exec()
    .then(results => {
      return new Promise((resolve, reject) => {
        Category.populate(results[0].meetings, { path: 'category' }).then(
          pMeetings => {
            if (pMeetings && pMeetings.length > 0) {
              resolve({
                data: pMeetings,
                count: results[0].meetingsCount[0].count
              });
            } else {
              resolve({ data: results[0].meetings, count: 0 });
            }
          }
        );
      });
    });
}

function fetchThreadsByUserQuery(userId) {
  return Thread.aggregate([
    {
      $facet: {
        threads: [
          { $match: { user: userId } },
          { $limit: 5 },
          { $sort: { createdAt: -1 } }
        ],
        threadsCount: [{ $match: { user: userId } }, { $count: 'count' }]
      }
    }
  ])
    .exec()
    .then(results => {
      const threads = results[0].threads;
      if (threads && threads.length > 0) {
        return { data: threads, count: results[0].threadsCount[0].count };
      }

      return { data: threads, count: 0 };
    });
}

function fetchPostByUserQuery(userId) {
  return Post.aggregate([
    {
      $facet: {
        posts: [
          { $match: { user: userId } },
          { $limit: 5 },
          { $sort: { createdAt: -1 } }
        ],
        postsCount: [{ $match: { user: userId } }, { $count: 'count' }]
      }
    }
  ])
    .exec()
    .then(results => {
      const posts = results[0].posts;
      if (posts && posts.length > 0) {
        return {
          data: results[0].posts,
          count: results[0].postsCount[0].count
        };
      }

      return { data: results[0].posts, count: 0 };
    });
}
