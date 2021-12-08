const router = require("express").Router()
const commentController = require("../controllers/comment")

router.get("/", commentController.getComments)
router.post("/create", commentController.createComment)
router.put("/update/:id", commentController.updateComment)
router.delete("/delete/:id", commentController.deleteComment)

module.exports = router