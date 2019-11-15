const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  location: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  startDate: { type: Date, required: true },
  timeFrom: { type: String, required: true },
  timeTo: { type: String, required: true },
  status: String,
  joinedPeopleCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  joinedPeople: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Meeting', meetingSchema);
