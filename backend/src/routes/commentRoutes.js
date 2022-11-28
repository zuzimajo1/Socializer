const router = require("express").Router();
const CommentController = require("../controller/CommentController");
var Authenticate = require("../middleware/jwt");


router.post("/comment", Authenticate.verifyToken, CommentController.createComment);
router.patch("/comment/delete", Authenticate.verifyToken , CommentController.deleteComment);

module.exports = router;