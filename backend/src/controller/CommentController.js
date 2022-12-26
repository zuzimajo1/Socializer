const CommentModel = require("../models/CommentsModel.js");
const PostModel = require("../models/PostModel");
const { body, sanitze } = require("express-validator");

//helper for response
const apiResponse = require("../helpers/apiResponse");
const mongoose = require("mongoose");
const { validate } = require("../helpers/validation");

/**
 * Comment Creation
 * @param {ObjectID} postID - the request body of PostID 
 * @param {string} comments - the request body of comments
 *
 * @returns {Object}
 *
 */

exports.createComment = [
  validate([
    body("comments")
      .isLength({ min: 1 })
      .withMessage("Comment must be specified"),
  ]),
  async (req, res) => {
    try {
      //Validate if the ObjectID of postID and user is valid
      if (!mongoose.Types.ObjectId.isValid(req.body.postID)) {
        return apiResponse.errorResponse(res, "Not valid ID");
      }
      //Create Comment
      var createcomment = new CommentModel({
        user: req.user._id,
        comments: req.body.comments,
      });
      //Save the comment
      createcomment.save((err, user) => {
        //Find the post by its ID and update, push the created comment
        PostModel.findByIdAndUpdate(req.body.postID, {
          $push: { comments: user._id },
        }).then((data) => {
          if (data) {
            //Find the post by its ID and populate
            PostModel.findOne({ _id: data._id })
              .populate({
                path: "userOwner", //populate the userOwner
                select: "_id firstname lastname createdAt img", //get only the properties
              })
              .populate({
                path: "comments",
                populate: { path: "user", select: "_id firstname lastname img" }, //populate the comments & user inside it. Get only the properties
              })
              .then((resData) => {
                if (resData)
                  return apiResponse.successResponsewithData(
                    res,
                    "Created Comment Successfully",
                    resData
                  );
              });
          } else {
            return apiResponse.errorResponse(res, "Create comment failed");
          }
        });
      });
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];

/**
 * Comment Deletion
 * The post owner can delete the comments
 * Also, the commentor can delete his/her comment
 *
 * @param {ObjectID} postID - the request query of postID
 * @param {ObjectID} commentID - the request query of commentID
 * @param {number} index - the request query of index of the comment inside the comments array
 * @returns {Object}
 *
 */

exports.deleteComment = [
  (req, res) => {
    try {
      //Validate if the given postID and userID is ObjectID
      if (!mongoose.Types.ObjectId.isValid(req.query.postID)) {
        return apiResponse.errorResponse(res, "Not valid ID");
      }
      //Find the post by postID and populate for the condition
      PostModel.findById({ _id: req.query.postID })
        .populate({
          path: "userOwner", //populate the userOwner
          select: "_id firstname lastname createdAt img", //get only the properties
        })
        .populate({
          path: "comments",
          populate: { path: "user", select: "_id firstname lastname img" },
        }) //populate the comments & user inside it. Get only the properties
        .then((user) => {
          //Proceed if the owner of the post or the owner of the comment or the Admin
          if ((user.userOwner._id).valueOf() === (req.user._id).valueOf() || (user.comments[req.query.index].user._id).valueOf() === (req.user._id).valueOf() || req.user.isAdmin) {
            //Pull the comment from the post
            //Read the docs https://www.mongodb.com/docs/manual/reference/operator/update/pullAll/
            PostModel.findByIdAndUpdate(
              { _id: req.query.postID },
              { $pullAll: { comments: [req.query.commentID] } },
              { new: true }
            )
              .populate({
                path: "userOwner", //populate the userOwner
                select: "_id firstname lastname createdAt img", //get only the properties
              })
              .populate({
                path: "comments",
                populate: { path: "user", select: "_id firstname lastname img" },
              }) //populate the comments & user inside it. Get only the properties
              .then((data) => {
                if (data)
                  return apiResponse.successResponsewithData(
                    res,
                    "Success",
                    data
                  );
              });
          } else {
            return apiResponse.errorResponse(res, "Cannot delete the comment");
          }
        });
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];
