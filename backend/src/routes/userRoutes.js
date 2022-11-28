var router = require("express").Router();
var AuthControllers = require("../controller/AuthController");
var Authenticate = require("../middleware/jwt");

router.post("/auth/register", AuthControllers.register);
router.post("/auth/login", AuthControllers.login);
router.patch("/auth/changepassword", Authenticate.verifyToken , AuthControllers.changepassword);

module.exports = router;