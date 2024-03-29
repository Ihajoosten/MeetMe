const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./posts');


const threadSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: [512, 'Too long, max is 512 characters']
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  meeting: { type: Schema.Types.ObjectId, ref: 'Meeting' },
  authorId: {type: String},
  authorName: {type: String},
  authorAvatar: {type: String},
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

threadSchema.post('remove', removePosts);

async function removePosts(thread, next) {
  try {
    await Post.remove({_id: { $in: thread.posts }})
    return next()
  } catch (e) {
    next(e)
  }
}

module.exports = mongoose.model('Thread', threadSchema);
