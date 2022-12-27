var router = require("express").Router();

var AuthControllers = require("../controller/AuthController");
var Authenticate = require("../middleware/jwt");
const { upload } = require("../helpers/fileHelper");

router.post("/auth/register", AuthControllers.register);
router.post("/auth/login", AuthControllers.login);
router.get("/auth/entry", Authenticate.verifyToken, AuthControllers.entry);
router.patch("/auth/changepassword", Authenticate.verifyToken , AuthControllers.changepassword);
router.patch("/auth/changeimage", Authenticate.verifyToken , AuthControllers.setImage );
module.exports = router;