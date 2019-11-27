/* eslint-disable no-unused-vars */
const Thread = require('../models/threads');
const Comment = require('../models/comments');

module.exports = {
  postThread: (req, res, next) => {
    const body = req.body;
    const author = req.userId;

    const thread = new Thread(body);
    thread.author = author;

    thread.save((err, createdThread) => {
      if (err) return res.status(422).json({ err });
      return res.status(201).json(createdThread);
    });
  },

  getAllThreads: (req, res, next) => {
    const meetingId = req.query.meetingId;
    const pageSize = req.query.pageSize || 5;
    const pageNum = req.query.pageNum || 1;

    const skips = pageSize * (pageNum - 1)

    Thread.find()
      .where({ meeting: meetingId })
      .skip(parseInt(skips))
      .limit(parseInt(pageSize) + 1)
      .sort({'createdAt': -1})
      .populate({
        path: 'posts',
        options: { limit: 5, sort: { createdAt: -1 } },
        populate: { path: 'author' }
      })
      .populate('author')
      .exec((errors, threads) => {

        if (errors) {
            return res.status(422).send({errors});
        }
    
        let isAllDataLoaded = false;
        if (threads.length <= 5 ) {
          isAllDataLoaded = true
        }
    
        return res.status(200).json({threads: threads.splice(0, 5), isAllDataLoaded});
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
    const {id} = req.params;
    const user = req.user;

    Thread.findById(id, (errors, thread) => {
      if (errors) {
        return res.status(422).send({errors})
      }
  
      if (thread.author != user._id) {
        return res.status(401).send({errors: {message: 'Not Authorized!'}})
      }
  
      thread.remove((errors, meeting) => {
        if (errors) {
          return res.status(422).send({errors})
        }
  
        return res.status(200).json({message: 'Deleted thread with id: ' + meeting._id});
      })
    })
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
