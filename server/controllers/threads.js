/* eslint-disable no-unused-vars */
const Thread = require("../models/threads");
const Comment = require("../models/comments");

module.exports = {
  postThread: (req, res, next) => {
    const body = req.body;

    let thread = new Thread(body);
    console.log(thread);

    if (!thread) {
      return res.status(422).json();
    }

    thread.save().then(() => {
      res.status(200).json({ result: "OK" });
    });
  },

  getAllThreads: (req, res, next) => {
    Thread.find({})
      .populate("comments")
      .populate("author")
      .then(threads => {
        res.status(200).json({ result: threads });
      })
      .catch(err => {
        next({
          message: "something went wrong",
          code: 400
        });
      });
  },
  updateThreadById: (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    Thread.findOneAndUpdate({ _id: id }, body)
      // eslint-disable-next-line no-undef
      .then(() => Thread.findOne({ _id, id }))
      .then(thread => {
        res.status(200).json({ result: thread });
      });
  },
  deleteThreadById: (req, res, next) => {
    const id = req.params.id;
    let t;
    Thread.findOne({ _id: id })
      .then(thread => {
        t = thread;
      })
      .then(() => Thread.findOneAndDelete({ _id: id }))
      .then(() => {
        res.status(200).json({ result: t });
      });
  },

  postCommentToThread: (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    let comment = new Comment({
      author: req.userId,
      content: body.content
    });
    Thread.findOne({ _id: id }).then(thread => {
      comment.thread = thread;
      comment.save();
      thread.comments.push(comment);
      thread.save();
      res.status(200).json({ result: thread });
    });
  }
};
