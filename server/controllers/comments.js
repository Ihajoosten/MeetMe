/* eslint-disable no-unused-vars */
const Comment = require("../models/comments");
const Thread = require("../models/threads");

module.exports = {
  postComment: (req, res, next) => {
    const body = req.body;
    const author = req.userId;

    let comment = new Comment(body);
    comment.author = author;

    comment
      .save()
      .then(() => Thread.findOne({ _id: body.thread }))
      .then(thread => {
        thread.comments.push(comment);
        thread.save();
      })
      .then(() => res.status(200).json({ result: "OK" }));
  },

  getAllComments: (req, res, next) => {
    Comment.find({})
      .populate("author")
      .populate("thread")
      .populate("comments")
      .then(comments => {
        console.log(comments);
        res.status(200).json({ result: comments });
      });
  },

  getCommentById: (req, res, next) => {
    let commentId = req.params.id;

    Comment.find({ _id: commentId })
      .populate("author")
      .populate("thread")
      .populate("comments")
      .then(comment => {
        res.status(200).json({ result: comment });
      });
  },

  updateCommentById: (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    Comment.findOneAndUpdate({ _id: id }, body)
      .then(() => Comment.findOne({ _id: id }))
      .then(comment => {
        res.status(200).json({ result: comment });
      });
  },

  deleteCommentById: (req, res, next) => {
    const id = req.params.id;
    let c;
    Comment.findOne({ _id: id })
      .then(comment => {
        c = comment;
      })
      .then(() => Comment.findOneAndDelete({ _id: id }))
      .then(() => {
        res.status(200).json({ result: c });
      });
  },

  postCommentToComment: (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    let c = new Comment({
      author: req.userId,
      content: body.content
    });
    Comment.findOne({ _id: id }).then(comment => {
      c.thread = comment.thread;
      c.save();
      comment.comments.push(c);
      comment.save();
      res.status(200).json({ result: comment });
    });
  }
};
