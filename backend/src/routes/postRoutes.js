var router = require("express").Router();
var PostController = require("../controller/PostController");
var Authenticate = require("../middleware/jwt");

router.post("/post", Authenticate.verifyToken, PostController.createPost);
router.get("/allpost", Authenticate.verifyToken, PostController.getPost);
router.delete("/post", Authenticate.verifyToken, PostController.deletePost);

module.exports = router;