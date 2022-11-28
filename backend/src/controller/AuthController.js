const UserModel = require("../models/UserModel");
const { validate } = require("../helpers/validation");
const { body, sanitize } = require("express-validator");

//helper for response
const apiResponse = require("../helpers/apiResponse");
const bcrypt = require("bcrypt");
const { createToken } = require("../middleware/jwt");
const Authenticate = require("../middleware/jwt");

/**
 * User Registration
 *
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} email
 * @param {string} password
 * @param {boolean} isAdmin
 *
 * @returns {Object}
 *
 */

exports.register = [
  //Validate fields
  validate([
    body("firstname")
      .isLength({ min: 1 })
      .trim()
      .withMessage("First name must be specified")
      .isAlphanumeric()
      .withMessage("First name has non-alphanumeric characters"),
    body("lastname")
      .isLength({ min: 1 })
      .trim()
      .withMessage("Last name must be specified")
      .isAlphanumeric()
      .withMessage("Lastname has non-alphanumeric characters"),
    body("email")
      .isLength({ min: 1 })
      .trim()
      .withMessage("Email must be specified")
      .isEmail()
      .withMessage("Email must be valid email address")
      .custom(async (value) => {
        return UserModel.findOne({ email: value }).then((user) => {
          if (user) return Promise.reject("Email is already in use");
        });
      }),
    body("password")
      .isLength({ min: 5 })
      .trim()
      .withMessage("Password must be 5 characters or greater")
      .withMessage("Password must be specified"),
    body("confirmpassword")
      .isLength({ min: 1 })
      .trim()
      .withMessage("Confirm password must be specified")
      .custom(async (confirmpassword, { req }) => {
        if (confirmpassword !== req.body.password) {
          return Promise.reject("Password and confirm password is unmatched");
        }
      }),

    //Sanitize Fields
    sanitize("firstname"),
    sanitize("lastname"),
    sanitize("email"),
    sanitize("password"),
  ]),
  (req, res) => {
    try {
      //Hash the input password
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        
        if (hash) {
          var user = new UserModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hash, 
          });

          user.save((error, data) => {
            if (error)
              return apiResponse.errorResponse(res, "Registration failed");
            apiResponse.successResponsewithData(
              res,
              "Registered Successfully",
              data
            );
          });
        } else {
          return apiResponse.errorResponse(res, "There is no hash password");
        }
      });
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];

/**
 * User Login
 *
 * @param {string} firstname
 * @param {string} password
 *
 * @returns {Object}
 *
 */

exports.login = [
  validate([
    body("email")
      .isLength({ min: 1 })
      .trim()
      .withMessage("Email must be specified")
      .isEmail()
      .withMessage("Email must be valid email address"),
    body("password")
      .isLength({ min: 1 })
      .trim()
      .withMessage("Password must be specified"),

    //Sanitize fields
    sanitize("email"),
    sanitize("password"),
  ]),
  (req, res) => {
    try {
      //find the email if it exist in the database
      UserModel.findOne({ email: req.body.email }).then((user) => {
        //if the user exist
        if (user) {
          //Compare the password
          bcrypt.compare(req.body.password, user.password, (err, same) => {
            //if the given password is the same with the password in the database
           
            if (same) {
              let userData = {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                isAdmin: user.isAdmin,
              };

              //Create Token
              const token = createToken(user);

              return apiResponse.successResponsewithData(
                res,
                "Login Successfully",
                { ...userData, token }
              );
            } else {
              return apiResponse.unauthorizedResponse(
                res,
                "Email or Password is incorrect"
              );
            }
          });
        } else {
          return apiResponse.unauthorizedResponse(
            res,
            "Email or Password is incorrect"
          );
        }
      });
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];

/**
 * User Change Password
 *
 * @param {string} currentPassword
 * @param {string} newPassword
 * @param {string} confirmNewPassword
 *
 * @returns {Object}
 *
 */

exports.changepassword = [
  validate([
    body("currentpassword")
      .isLength({ min: 1 })
      .trim()
      .withMessage("Current password must be specified"),
    body("newpassword")
      .isLength({ min: 5 })
      .trim()
      .withMessage("New Password must be 5 characters or greater")
      .withMessage("New Password must be specified"),
    body("confirmnewpassword")
      .isLength({ min: 5 })
      .trim()
      .withMessage("Confirm new password must be specified")
      .custom(async (value, { req }) => {
        if (value !== req.body.newpassword) {
          return Promise.reject("Confirming new password is incorrect");
        }
      }),
  ]),
  (req, res) => {
    try {
      UserModel.findOne({ email: req.user.email }).then((user) => {
        bcrypt.compare(req.body.currentpassword, user.password, (err, same) => {
          if (same) {
            bcrypt.hash(req.body.newpassword, 10, (error, hash) => {
                UserModel.findOneAndUpdate(
                  { email: req.user.email },
                  { password: hash },
                  { new: true }
                ).then((data) => {
                    return apiResponse.successResponsewithData(res,"Updated Successfully",data);
                });
            });
          } else {
            return apiResponse.errorResponse(res, "Incorrect current password");
          }
        });
      }
      );
    } catch (err) {
      return apiResponse.errorResponse(res, err);
    }
  },
];
