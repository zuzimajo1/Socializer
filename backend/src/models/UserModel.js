var mongoose = require("mongoose");

const { Schema, model } = mongoose;

var UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: 0 },
    img: {type: String, required: false},
},{timestamps: true});


UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = model("User", UserSchema);



