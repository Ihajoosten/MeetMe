/* eslint-disable no-unused-vars */
const Comment = require('../models/comments');
const Post = require('../models/posts');

module.exports = {
  postComment: (req, res, next) => {
    const body = req.body;
    const author = req.userId;
    const comment = new Comment(body);
    comment.author = author;

    comment.save((err, createdComment) => {
      if (err) {
        return res.status(422).json({ err });
      }
      Post.updateOne(
        { _id: createdComment.post },
        { $push: { comments: createdComment } },
        () => {}
      );
      return res.status(201).json(createdComment);
    });
  }
//   ,

//   getAllComments: (req, res, next) => {
//     Comment.find({})
//       .populate('author')
//       .populate('thread')
//       .populate('comments')
//       .then(comments => {
//         console.log(comments);
//         res.status(200).json({ result: comments });
//       });
//   },

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
