var mongoose = require("mongoose");

const { Schema, model  } = mongoose;

var PostSchema = Schema({
    userOwner:{ type: Schema.Types.ObjectId, ref: "User", required: true },
    post: {type: String},
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment", required: false}],
},{timestamps: true});


module.exports = model("Post", PostSchema);
