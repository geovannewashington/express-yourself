const errorHandler = (err, req, res, next) => {
    if (err.status) { // status was already set 
        return res.status(err.status).json({errMsg: err.message});
    }
    return res.status(500).json({errMsg: err.message});
    // 500 means an internal server error
};

export default errorHandler;
