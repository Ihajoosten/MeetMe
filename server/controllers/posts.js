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
  },
  deletePostById: (req, res) => {
    const {id} = req.params;
    const user = req.user;
  
    Post.findById(id, (errors, post) => {
      if (errors) {
        return res.status(422).send({errors})
      }
  
      if (post.author != user._id) {
        return res.status(401).send({errors: {message: 'Not Authorized!'}})
      }
  
      post.remove((errors, post) => {
        if (errors) {
          return res.status(422).send({errors})
        }
  
        return res.status(200).json({message: 'Deleted post with id: ' + post._id});
      })
    })
  }
};
