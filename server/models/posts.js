const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./comments');

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
    maxlength: [512, 'Too long, max is 512 characters']
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  thread: { type: Schema.Types.ObjectId, ref: 'Thread' },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

postSchema.post('remove', removeComments);


async function removeComments(post, next) {
  try {
    await Comment.remove({_id: { $in: post.comments }})
    return next()
  } catch (e) {
    next(e)
  }
}

module.exports = mongoose.model('Post', postSchema);
