const Comment = require('../models/Comment')

exports.getComments = async (req, res) => {
  const comments = await Comment.find({})
  
  res.status(200).send(comments)
}

exports.createComment = async (req, res) => {

    const {postId, commentUser, comment} = req.body;

  const newComment = {
    postId,
    commentUser,
    comment
  }

  const createdComment = new Comment(newComment)

  const savedComment = await createdComment.save()

  res.status(200).send(`yay ${savedComment._id}`)
}

exports.updateComment = async (req, res) => {
  const { id } = req.params;

  const comment = await Comment.findOneAndUpdate({ _id: id }, req.body)

  if (!comment) res.status(404).send("No comment with that id found")

  const updatedComment = await Comment.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following comment: \n ${updatedComment}`)
}

exports.deleteComment = async (req, res) => {
  const { id } = req.params;

  const comment = await Comment.findOneAndDelete({ _id: id })

  if (!comment) res.status(404).send("No comment with that id found")
  console.log(comment)

  res.status(200).send(`Successfully deleted the following comment: \n ${comment}`)
}