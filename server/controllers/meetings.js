const Meeting = require('../models/meetings');
const User = require('../models/users');

module.exports = {
  createMeeting: (req, res) => {
    const body = req.body;
    const author = req.userId;
    const meeting = new Meeting(body);
    meeting.author = author;
    meeting.status = 'active';

    meeting.save((errors, created) => {
      if (errors) {
        return res.status(422).send({ errors });
      }
      return res.status(201).json(created);
    });
  },
  getAllMeetings: (req, res) => {
    Meeting.find({})
      .populate('author', 'name id avatar')
      .populate('category')
      .populate('joinedPeople')
      .populate({
        path: 'threads',
        populate: { path: 'posts' }
      })
      .exec((errors, meetings) => {
        if (errors) {
          return res.status(422).send({ errors });
        }

        return res.status(200).json(meetings);
      });
  },
  getMeetingById(req, res) {
    const { id } = req.params;

    Meeting.findById(id)
      .populate('author', 'name id avatar')
      .populate('category')
      .populate({
        path: 'joinedPeople',
        options: { limit: 5, sort: { username: -1 } }
      })
      .exec((errors, meeting) => {
        if (errors) {
          return res.status(422).send({ errors });
        }

        return res.status(200).json(meeting);
      });
  },
  updateMeeting: (req, res) => {
    const meeting = req.body;
    const { id } = req.params;
    const user = req.user;

    if (user._id === meeting.author._id) {
      Meeting.findByIdAndUpdate(
        id,
        { $set: meeting },
        { new: true },
        (err, updatedMeeting) => {
          if (err) {
            return res.status(422).json({ err });
          }
          return res.status(200).json(updatedMeeting);
        }
      );
    } else {
      return res
        .status(401)
        .json({ message: 'Not authorized to update meeting!' });
    }
  },
  joinMeeting: (req, res) => {
    const user = req.userId;
    const { id } = req.params;

    Meeting.findById(id, (errors, meeting) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      meeting.joinedPeople.push(user);
      meeting.joinedPeopleCount++;

      return Promise.all([
        meeting.save(),
        User.updateOne({ _id: user }, { $push: { joinedMeetings: meeting } })
      ])
        .then(() => res.status(201).json(id))
        .catch(errors => res.status(422).send({ errors }));
    });
  },
  leaveMeeting: (req, res) => {
    const user = req.userId;
    const { id } = req.params;

    Promise.all([
      Meeting.updateOne(
        { _id: id },
        { $pull: { joinedPeople: user }, $inc: { joinedPeopleCount: -1 } }
      ),
      User.updateOne({ _id: user }, { $pull: { joinedMeetings: id } })
    ])
      .then(() => res.status(200).json({ id }))
      .catch(errors => res.status(422).send({ errors }));
  }
};
