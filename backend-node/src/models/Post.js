const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  filename: { type: String, required: true },
  text: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  likeAmount: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post