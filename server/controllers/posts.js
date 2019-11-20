const Thread = require('../models/threads');
const Post = require('../models/posts');

module.exports = {
  getAllPosts: (req, res) => {
    const threadId = req.query.threadId;

    Post.find({ thread: threadId })
      .populate('author')
      .exec((errors, posts) => {
        if (errors) {
          return res.status(422).send({ errors });
        }

        return res.status(200).json(posts);
      });
  },
  createPost: (req, res) => {
    const body = req.body;
    const author = req.userId
    const post = new Post(body);
    post.author = author;

    post.save((errors, createdPost) => {
      if (errors) {
        return res.status(422).json({ errors });
      }
      Thread.updateOne(
        { _id: createdPost.thread },
        { $push: { posts: createdPost } },
        () => {}
      );
      return res.status(201).json(createdPost);
    });
  }
};
