const Meeting = require('../models/meetings');

module.exports = {
  createMeeting: (req, res) => {
    const body = req.body;
    const author = req.userId;

    const meeting = new Meeting(body);
    meeting.author = author;
    meeting.status = 'active';

    meeting.save().then(() => res.status(200).json({ result: meeting }));

    // meeting.save((err, meeting) => {
    //   console.log(meeting)
    //   if (err) {
    //     return res.status(422).send({ err });
    //   }
    //   return res.status(200).json(meeting);
    // });
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

        return res.json(meetings);
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

        return res.json(meeting);
      });
  }
};
