const Meeting = require("../models/meetings");

module.exports = {
  createMeeting(req, res) {
    const body = req.body;
    const a = req.userId;

    const meeting = new Meeting(body);
    meeting.author = a;
  
    meeting.save((errors, meeting) => {
      if (errors) {
        return res.status(422).send({errors});
      }
  
      return res.status(200).json(meeting)
    })
  },
  getAllMeetings(req, res) {
    Meeting.find({})
      .populate("author")
      .populate("category")
      .populate("joinedPeople")
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
      .populate("author", "name id avatar")
      .populate("category")
      .populate({
        path: "joinedPeople",
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
