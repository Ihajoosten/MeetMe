const Meeting = require('../models/meetings');
const User = require('../models/users');

module.exports = {
  createMeeting: async (req, res) => {
    const body = await req.body;
    const author = await req.userId;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });

    const meeting = new Meeting(body);
    meeting.author = author;

    try {
      await meeting.save((errors, created) => {
        if (errors) return res.status(422).json({ errors });
        else return res.status(201).json(created);
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  getAllMeetings: async (req, res) => {
    const { category } = (await req.query) || {};
    const { location } = (await req.query) || {};

    const findQuery = (await location)
      ? Meeting.find({ processedLocation: { $regex: '.*' + location + '.*' } })
      : Meeting.find({});

    try {
      await findQuery
        .populate('author', 'name id avatar')
        .populate('category')
        .populate('joinedPeople')
        .populate({
          path: 'threads',
          populate: { path: 'posts' }
        })
        .limit(5)
        .sort({ createdAt: -1 })
        .exec((errors, meetings) => {
          if (errors) return res.status(422).send({ errors });
          if (category)
            meetings = meetings.filter(
              meeting => meeting.category.name === category
            );
          return res.status(200).json(meetings);
        });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  getMeetingById: async (req, res) => {
    const { id } = await req.params;

    if (id === null)
      return res
        .status(404)
        .json({ message: 'No meeting specified or does not exist' });

    try {
      await Meeting.findById(id)
        .populate('author', 'name id avatar')
        .populate('category')
        .populate({
          path: 'joinedPeople',
          options: { limit: 5, sort: { username: -1 } }
        })
        .exec((errors, meeting) => {
          if (errors) return res.status(422).send({ errors });
          else return res.status(200).json(meeting);
        });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  updateMeeting: async (req, res) => {
    const meeting = await req.body;
    const { id } = await req.params;
    const user = await req.user;

    if (meeting === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (id === null)
      return res
        .status(404)
        .json({ message: 'No meeting specified or does not exist' });
    if (user === null)
      return res.status(401).json({ message: 'Not Authorized' });

    try {
      if (user._id === meeting.author._id) {
        await Meeting.findByIdAndUpdate(
          id,
          { $set: meeting },
          { new: true },
          (err, updatedMeeting) => {
            if (err) return res.status(422).json({ err });
            else return res.status(200).json(updatedMeeting);
          }
        );
      } else
        return res
          .status(401)
          .json({ message: 'Not authorized to update meeting!' });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  deleteMeeting: async (req, res) => {
    const { id } = await req.params;
    const user = await req.user;

    if (id === null)
      return res
        .status(404)
        .json({ message: 'No meeting specified or does not exist' });
    if (user === null)
      return res.status(401).json({ message: 'Not Authorized' });

    try {
      await Meeting.findById(id, async (errors, meeting) => {
        if (errors) return res.status(422).send({ errors });
        if (meeting.author != user._id)
          return res
            .status(401)
            .send({ errors: { message: 'Not Authorized!' } });

        await meeting.remove((errors, meeting) => {
          if (errors) return res.status(422).send({ errors });
          else
            return res
              .status(200)
              .json({ message: 'Deleted meeting with id: ' + meeting._id });
        });
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  joinMeeting: async (req, res) => {
    const { id } = await req.params;
    const user = await req.user;

    if (id === null)
      return res
        .status(404)
        .json({ message: 'No meeting specified or does not exist' });
    if (user === null)
      return res.status(401).json({ message: 'Not Authorized' });

    try {
      await Meeting.findById(id, async (errors, meeting) => {
        if (errors) return res.status(422).send({ errors });

        meeting.joinedPeople.push(user);
        meeting.joinedPeopleCount++;

        return await Promise.all([
          await meeting.save(),
          await User.updateOne(
            { _id: user },
            { $push: { joinedMeetings: meeting } },
            (err, id) => {
              if (err) return res.status(422).send({ err });
              else return res.status(200).json(id);
            }
          )
        ]);
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  leaveMeeting: async (req, res) => {
    const { id } = await req.params;
    const user = await req.user;

    if (id === null)
      return res
        .status(404)
        .json({ message: 'No meeting specified or does not exist' });
    if (user === null)
      return res.status(401).json({ message: 'Not Authorized' });

    try {
      await Promise.all([
        await Meeting.updateOne(
          { _id: id },
          { $pull: { joinedPeople: user }, $inc: { joinedPeopleCount: -1 } }
        ),
        await User.updateOne(
          { _id: user },
          { $pull: { joinedMeetings: id } },
          (err, id) => {
            if (err) return res.status(422).send({ err });
            else return res.status(200).json(id);
          }
        )
      ]);
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  }
};
