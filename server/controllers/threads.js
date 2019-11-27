/* eslint-disable no-unused-vars */
const Thread = require('../models/threads');
const Comment = require('../models/comments');

module.exports = {
  postThread: async (req, res) => {
    const body = await req.body;
    const author = await req.userId;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (author === null)
      return res.status(401).json({ message: 'Not Authorized' });

    const thread = new Thread(body);
    thread.author = author;

    try {
      await thread.save((err, thread) => {
        if (err) return res.status(422).json({ err });
        else return res.status(201).json(thread);
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },

  getAllThreads: async (req, res, next) => {
    const meetingId = await req.query.meetingId;
    const pageSize = (await req.query.pageSize) || 5;
    const pageNum = (await req.query.pageNum) || 1;
    const skips = pageSize * (pageNum - 1);

    if (meetingId === null)
      return res.status(400).json({
        message: 'Bad request - no meeting specified or does not exist'
      });

    try {
      await Thread.find()
        .where({ meeting: meetingId })
        .skip(parseInt(skips))
        .limit(parseInt(pageSize) + 1)
        .sort({ createdAt: -1 })
        .populate({
          path: 'posts',
          options: { limit: 5, sort: { createdAt: -1 } },
          populate: { path: 'author' }
        })
        .populate('author')
        .exec((err, threads) => {
          if (err) return res.status(422).json({ err });
          let isAllDataLoaded = false;
          if (threads.length <= 5) isAllDataLoaded = true;
          return res
            .status(200)
            .json({ threads: threads.splice(0, 5), isAllDataLoaded });
        });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  updateThreadById: async (req, res, next) => {
    const { id } = await req.params;
    const body = await req.body;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (id === null)
      return res
        .status(401)
        .json({ message: 'No thread specified or does not exist' });

    try {
      await Thread.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true },
        (err, thread) => {
          if (err) return res.status(422).send({ err });
          else return res.status(200).json(thread);
        }
      );
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  deleteThreadById: async (req, res, next) => {
    const { id } = await req.params;
    const user = await req.user;

    if (user === null)
      return res.status(401).json({ message: 'Not Authorized' });
    if (id === null)
      return res
        .status(400)
        .json({ message: 'No thread specified or does not exist' });

    try {
      await Thread.findById(id, async (err, thread) => {
        if (err) return res.status(422).send({ err });
        if (thread.author != user._id)
          return res
            .status(401)
            .send({ errors: { message: 'Not Authorized!' } });
        await thread.remove((err, thread) => {
          if (err) return res.status(422).send({ err });
          return res
            .status(200)
            .json({ message: 'Deleted thread with id: ' + thread._id });
        });
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  }
};
