const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const commentSchema = new Schema({
  postId: { type: ObjectId, required: true },
  commentUser: { type: String, required:  true },
  comment: { type: String, required:  true },
  createdAt: { type: Date, default: Date.now }
});

const Comment = model("Comment", commentSchema)

module.exports = Comment