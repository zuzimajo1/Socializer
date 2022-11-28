//return a success reponse with status code of 200
exports.successResponse = (res,msg)=>{
    var data = {
        status: 1,
        message: msg
    };
    return res.status(200).json(data);
};

//return a success response with data and status code of 200
exports.successResponsewithData = (res, msg, data)=>{
    var successWithData = {
        status: 1,
        message: msg,
        data,
    };
    return res.status(200).json(successWithData);
};

//return an error response with status code of 500
exports.errorResponse = (res, msg)=>{
    var data={
        status: 0,
        message: msg,
    };
    return res.status(500).json(data);
};

//return unauthrized response with status code of 401
exports.unauthorizedResponse = (res, msg)=>{
    var data = {
        status : 0,
        message: msg,
    };
    return res.status(401).json(data);
};


exports.notFoundResponse = (res, msg)=>{
    var data = {
        status: 0,
        message: msg
    };
    return res.status(403).json(data);
};

exports.badResponse =  (res, err)=>{
    return res.status(400).json(err);

};