var mongoose = require("mongoose");

const { Schema, model } = mongoose;

var CommentSchema = Schema({
    user:{ type: Schema.Types.ObjectId, ref: "User" },
    comments: { type: String }
},{timestamps: true});

module.exports = model("Comment", CommentSchema);
