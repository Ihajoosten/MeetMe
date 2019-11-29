/* eslint-disable no-unused-vars */
const Comment = require('../models/comments');
const Post = require('../models/posts');

module.exports = {
  postComment: async (req, res) => {
    const body = await req.body;
    const author = await req.userId;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (author === null)
      return res.status(401).json({ message: 'Not Authorized' });

    const comment = new Comment(body);
    comment.author = author;

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
  }
  //   ,

  //   updateCommentById: (req, res, next) => {
  //     const id = req.params.id;
  //     const body = req.body;

  //     Comment.findOneAndUpdate({ _id: id }, body)
  //       .then(() => Comment.findOne({ _id: id }))
  //       .then(comment => {
  //         res.status(200).json({ result: comment });
  //       });
  //   },

  //   deleteCommentById: (req, res, next) => {
  //     const id = req.params.id;
  //     let c;
  //     Comment.findOne({ _id: id })
  //       .then(comment => {
  //         c = comment;
  //       })
  //       .then(() => Comment.findOneAndDelete({ _id: id }))
  //       .then(() => {
  //         res.status(200).json({ result: c });
  //       });
  //   }
};
