// const Meeting = require('../models/meetings');

// exports.getmeetings = function(req, res) {
//   Meeting.find({})
//         .populate('category')
//         .populate('joinedPeople')
//         .exec((errors, meetings) => {

//     if (errors) {
//       return res.status(422).send({errors});
//     }

//     return res.json(meetings);
//   });
// }

// exports.getmeetingById = function(req, res) {
//   const {id} = req.params;

//   Meeting.findById(id)
//         .populate('meetingCreator', 'name id avatar')
//         .populate('category')
//         .populate({path: 'joinedPeople',
//            options: {limit: 5, sort: {username: -1}}})
//         .exec((errors, meeting) => {
//     if (errors) {
//       return res.status(422).send({errors});
//     }

//     return res.json(meeting);
//   });
// }
