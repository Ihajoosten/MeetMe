/* eslint-disable no-unused-vars */
const User = require('../models/users');
const auth = require('../services/authentication');
const Meeting = require('../models/meetings');
const Thread = require('../models/threads');
const Post = require('../models/posts');
const Category = require('../models/categories');
const Comment = require('../models/comments');

module.exports = {
  createUser: async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    const body = await req.body;

    if (user !== null)
      return res.status(409).json({ message: 'Username already taken' });
    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });

    const newUser = new User(body);

    try {
      await newUser.save((err, user) => {
        if (err) return res.status(422).json({ err });
        else return res.status(201).json(user);
      });
    } catch (error) {
      if (error)
        return res.status(400).json({ message: 'Could not save user' });
    }
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
  loginUser: async (req, res) => {
    const body = await req.body;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (body.email === null)
      return res.status(400).json({ message: 'Bad request - empty email' });
    if (body.password === null)
      return res.status(400).json({ message: 'Bad request - empty password' });

    try {
      await User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) return res.status(422).json({ err });
        if (user === null)
          return res
            .status(401)
            .json({ message: 'Login failed - invalid email !', status: 401 });

        const passwordMatch = await User.passwordMatches(
          req.body.password,
          user.password
        );
        if (!passwordMatch)
          return res.status(401).json({
            message: 'Login failed - invalid password !',
            status: 401
          });

        const token = await auth.generateJWT(user);
        return res.status(200).json({ token: token });
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  getUserActivity: (req, res) => {
    const userId = req.userId;

    Promise.all([
      fetchMeetingsByUserQuery(userId),
      fetchThreadsByUserQuery(userId),
      fetchPostByUserQuery(userId),
      fetchCommentsByUser(userId)
    ])
      // Writing [] to get data from the array
      .then(([meetings, threads, posts, comments]) =>
        res.json({ meetings, threads, posts, comments })
      )
      .catch(err => {
        console.log(err);
        res.status(422).send({ err });
      });
  },
  updateUser: async (req, res, next) => {
    const userId = await req.userId;
    const userData = await req.body;
    const user = await req.user;

    if (userId === null)
      return res.status(401).json({ message: 'Not Authorized' });
    if (userData === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (user === null)
      return res.status(400).json({ message: 'Bad request - no user' });

    if (user._id === userId) {
      try {
        await User.findByIdAndUpdate(userId, req.body, (err, user) => {
          if (err) {
            return next(err);
          } else {
            user.password = req.body.password;
            user.save((err, user) => {
              if (err) return res.status(422).json({ err });
              else return res.status(200).json(user);
            });
          }
        });
      } catch (error) {
        if (error) return res.status(500).json({ error });
      }
    } else return res.status(401).json({ message: 'Not authorized' });
  }
};

async function fetchMeetingsByUserQuery(userId) {
  const results = await Meeting.find({ author: userId }).exec();
  return new Promise((resolve, reject) => {
    Category.populate(results, { path: 'Category' }).then(meetings => {
      if (meetings && meetings.length > 0) {
        resolve({
          data: meetings,
          count: results.length
        });
      } else {
        resolve({ data: [], count: 0 });
      }
    });
  });
}

async function fetchThreadsByUserQuery(userId) {
  let results = await Thread.find({ authorId: userId }).exec();
  const threads = results;
  if (threads && threads.length > 0) {
    return {
      data: results,
      count: results.length
    };
  }
  return { data: [], count: 0 };
}

async function fetchPostByUserQuery(userId) {
  let results = await Post.find({ authorId: userId }).exec();
  const posts = results;
  if (posts && posts.length > 0) {
    return {
      data: results,
      count: results.length
    };
  }
  return { data: [], count: 0 };
}

async function fetchCommentsByUser(userId) {
  let results = await Comment.find({ authorId: userId }).exec();
  const comments = results;
  if (comments && comments.length > 0) {
    return {
      data: results,
      count: results.length
    };
  }
  return { data: [], count: 0 };
}
