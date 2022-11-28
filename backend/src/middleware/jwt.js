require("dotenv").config();
var jwt = require("jsonwebtoken");
const apiResponse = require("../helpers/apiResponse");
const UserModel = require("../models/UserModel");


//CreateToken when Login
exports.createToken = (user)=> jwt.sign({ _id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SEC);


exports.verifyToken = async (req, res, next)=>{
    if(req.headers.token){
        const token = req.headers.token.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, decoded)=>{
            if(decoded){
                UserModel.findById({_id: decoded._id}).then(user =>{
                    if(!user) return apiResponse.errorResponse(res, "Account doesn't exist");
                    req.user = user;
                    next();
                });
            }else{
                return apiResponse.unauthorizedResponse(res, "Unauthorized");
            }
        });
    }else{
        return apiResponse.notFoundResponse(res, "There is no token");
    }
};



exports.verifyTokenAdmin = (req, res, next)=>{
    this.verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return apiResponse.unauthorizedResponse(res, "You are not the admin");
        }
    });
};


