require("dotenv").config();
var express = require("express");
var helmet = require("helmet");
var cors = require("cors");
var mongoose = require("mongoose");
var path = require("path");

//Routes
var userRouter = require("./src/routes/userRoutes");
var postRouter = require("./src/routes/postRoutes");
var commentRouter = require("./src/routes/commentRoutes");


//DB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    if (process.env.NODE_ENV === "production") {
      console.log("Connected to database");
    } else {
      console.log("Test is running");
    }
  })
  .catch((err) => {
    console.log(`App starting error ${err.message}`);
  });

var app = express();
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//To allow cross-origin requests
let corsOptions = {
  origin: "http://127.0.0.1:5173", // Compliant
};
app.use(cors(corsOptions));

//Routes Prefixes
app.use("/", postRouter);
app.use("/", userRouter);
app.use("/", commentRouter);
app.set("trust proxy", 1);
app.get("/", (req, res) => {
   res.render("index", { title: "Express" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);




