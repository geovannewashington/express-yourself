const errorHandler = (err, req, res, next) => {
    if (req.status) {
        res.status(req.status).json({errMsg : err.message});
    }
    return res.status(500).json({errMsg : err.message});
};
