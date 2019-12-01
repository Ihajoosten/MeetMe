/* eslint-disable no-unused-vars */
const Comment = require('../models/comments');
const Post = require('../models/posts');

module.exports = {
  postComment: async (req, res) => {
    const body = await req.body;
    const author = await req.user;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (author === null)
      return res.status(401).json({ message: 'Not Authorized' });

    const comment = new Comment(body);
    comment.authorId = author._id
    comment.authorAvatar = author.avatar
    comment.authorName = author.name;
    try {
      await comment.save((err, comment) => {
        if (err) return res.status(422).json({ err });

        Post.updateOne(
          { _id: comment.post },
          { $push: { comments: comment } },
          () => {}
        );
        return res.status(201).json(comment);
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  updateCommentById: async (req, res) => {
    const { id } = await req.params;
    const body = await req.body;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (id === null)
      return res
        .status(401)
        .json({ message: 'No comment specified or does not exist' });

    try {
      await Comment.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true },
        (err, comment) => {
          if (err) return res.status(422).send({ err });
          else return res.status(200).json(comment);
        }
      );
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  deleteCommentById: async (req, res) => {
    const { id } = await req.params;
    const user = await req.user;

    if (id === null)
      return res.status(400).json({
        message: 'Bad request - not specified comment or does not exist'
      });
    if (user === null)
      return res.status(401).json({ message: 'Not Authorized' });

    try {
      await Comment.findById(id, async (err, comment) => {
        if (err) return res.status(422).send({ err });

        if (comment.authorId != user._id)
          return res
            .status(401)
            .send({ errors: { message: 'Not Authorized!' } });

        await comment.remove((err, post) => {
          if (err) return res.status(422).send({ err });
          return res
            .status(200)
            .json({ message: 'Deleted comment with id: ' + post._id });
        });
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  }
  
};
