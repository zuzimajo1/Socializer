const { validationResult } = require("express-validator");
const apiResponse = require("./apiResponse");

exports.validate = (validations) =>{
    return async (req, res, next)=>{
        await Promise.all(validations.map((validation => validation.run(req))));

        const errors = validationResult(req);
        
        if(errors.isEmpty()){ //when there is no more errors
            return next();
        }
        apiResponse.badResponse(res,{errors: errors.array()});
        
    };
};