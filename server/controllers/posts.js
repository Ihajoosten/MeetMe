const Thread = require('../models/threads');
const Post = require('../models/posts');

module.exports = {
  getAllPosts: (req, res) => {
    const threadId = req.query.threadId;

    Post.find({ thread: threadId })
      .populate('user')
      .populate('thread')
      .exec((errors, posts) => {
        if (errors) {
          return res.status(422).send({ errors });
        }

        return res.json(posts);
      });
  },
  createPost: (req, res) => {
    const postData = req.body;
    const author = req.userId;

    const post = new Post(postData);

    post.author = author;

    post.save((errors, createdPost) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      Thread.update(
        { _id: createdPost.thread },
        { $push: { posts: createdPost } },
        () => {}
      );
      return res.json(createdPost);
    });
  }
};
