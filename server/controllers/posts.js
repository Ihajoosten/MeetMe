const Thread = require('../models/threads');
const Post = require('../models/posts');

module.exports = {
  getAllPosts: async (req, res) => {
    const threadId = await req.query.threadId;

    if (threadId === null)
      return res.status(400).json({
        message: 'Bad request - not specified thread or does not exist'
      });

    try {
      await Post.find({ thread: threadId })
        .populate('author')
        .exec((errors, posts) => {
          if (errors) return res.status(422).send({ errors });
          else return res.status(200).json(posts);
        });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  createPost: async (req, res) => {
    const body = await req.body;
    const author = await req.userId;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (author === null)
      return res.status(401).json({ message: 'Not Authorized' });

    const post = new Post(body);
    post.author = author;

    try {
      await post.save(async (err, post) => {
        if (err) return res.status(422).json({ err });

        await Thread.updateOne(
          { _id: post.thread },
          { $push: { posts: post } },
          () => {}
        );
        return res.status(201).json(post);
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  deletePostById: async (req, res) => {
    const { id } = await req.params;
    const user = await req.user;

    if (id === null)
      return res.status(400).json({
        message: 'Bad request - not specified thread or does not exist'
      });
    if (user === null)
      return res.status(401).json({ message: 'Not Authorized' });

    try {
      await Post.findById(id, async (err, post) => {
        if (err) return res.status(422).send({ err });

        if (post.author != user._id)
          return res
            .status(401)
            .send({ errors: { message: 'Not Authorized!' } });

        await post.remove((err, post) => {
          if (err) return res.status(422).send({ err });
          return res
            .status(200)
            .json({ message: 'Deleted post with id: ' + post._id });
        });
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  }
};
