// define error handler
module.exports = (error, req, res, next) => {
    const code = error.statusCode || 500;

    let data = {
        statusCode: code,
        status: "error",
        message: error?.message,
    };

    if (code !== 422) {
        data = {
            statusCode: code,
            status: "error",
            message: error.message
        };
    }

    res.json(data);
};
