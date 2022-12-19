const PostModel = require("../models/PostModel");
const { body, sanitize } = require("express-validator");
var mongoose = require("mongoose");
//helper for response
const { validate } = require("../helpers/validation");
const apiResponse = require("../helpers/apiResponse");
const Authenticate = require("../middleware/jwt");

/**
 * Post Creation
 *
 * @param {string} post - the request body of the post
 *
 * @returns {Object}
 *
 */

exports.createPost = [
  validate([
    body("post").isLength({ min: 1 }).withMessage("Please write a post"),
  ]),
  (req, res) => {
    try {
      
      //Create a Post
      var createPost = new PostModel({
        userOwner: req.user._id,
        post: req.body.post
      });

      createPost.save((err, user) => {
        if (err) return apiResponse.errorResponse(res, "Post creation failed");
        if (user) {
          //Find the post using its _id to return the data;
          PostModel.find({ _id: user._id })
            .populate({
              path: "userOwner", //populate the userOwner
              select: "firstname lastname createdAt", //get only the properties
            })
            .then((data) => {
              const datas = data[0];
              return apiResponse.successResponsewithData(
                res,
                "Post created successfully",
                datas
              );
            });
        }
      });
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];

/**
 * All Post Retrieved
 *
 *
 * @returns {Object}
 *
 */

exports.getPost = [
  (req, res) => {
    try {
      PostModel.find()
        .populate({
          path: "userOwner", //populate the userOwner
          select: "firstname lastname createdAt", //get only the properties
        })
        .populate({
          path: "comments",
          populate: { path: "user", select: "firstname lastname" },
        })
        .sort({ updatedAt: -1 })
        .then((data) => {
          if (data) {
            return apiResponse.successResponsewithData(res, "All Post", data);
          } else {
            return apiResponse.errorResponse(res, "Cannot get all post");
          }
        }); //populate the comments & user inside it. Get only the properties
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];

/**
 * Post Deletion
 *
 * @param {ObjectID} postID - the request query of the postID
 *
 * @returns {Object}
 *
 */

exports.deletePost = [
  (req, res) => {
    try {
        //Find the post by the ID and populate the userOwner
      PostModel.findById({ _id: req.query.postID })
        .populate("userOwner")
        .then((user) => {
          if (user) {
            //Compare the userOwner._id and userID if equal to continue
            if (((user.userOwner._id).valueOf() === (req.user._id).valueOf()) || req.user.isAdmin) {
                //If it is equal then delete the post
                PostModel.findByIdAndDelete({_id: user._id}).populate({
              path: "userOwner", //populate the userOwner
              select: "firstname lastname createdAt", //get only the properties
            }).then((data)=>{
                    return apiResponse.successResponsewithData(res, "Post was deleted successfully", data);
                });
            } else {
              return apiResponse.errorResponse(res, "Not the owner of post");
            }
          } else {
            return apiResponse.errorResponse(res, "PostID doesn't exist");
          }
        });
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];
