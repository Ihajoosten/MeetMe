// const mongoose = require("mongoose");

// const commentSchema = new mongoose.Schema({
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: [true, "User is required to write a new comment!"]
//   },
//   content: {
//     type: String,
//     required: [true, "Comment content is required!"]
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   post: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Post",
//     required: [true, "Post is required!"]
//   }
// });

// module.exports = mongoose.model("Comment", commentSchema);
