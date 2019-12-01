const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  authorId: {type: String},
  authorName: {type: String},
  authorAvatar: {type: String},
  content: {
    type: String,
    required: [true, "Comment content is required!"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: [true, "Post is required!"]
  }
});

module.exports = mongoose.model("Comment", commentSchema);
