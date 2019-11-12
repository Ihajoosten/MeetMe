const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = new Schema({
  title: { type: String, required: true, max: [512, 'Too long, max is 512 characters']},
  meeting: { type: Schema.Types.ObjectId, ref: 'Meeting' },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Thread', threadSchema );
