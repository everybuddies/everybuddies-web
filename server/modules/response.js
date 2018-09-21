var statusSuccess = 200;
var statusError = 400;
var statusErrorAuth = 401;

function response(req, res) {
    return {
        reply: (promise) => {
            promise.then(
                (successData) => (res.status(statusSuccess).json(successData)),
                (errorData) => (res.status(statusError).json(errorData)));
        },
        success: (data) => (res.status(statusSuccess).json(data)),
        error: (data) => (res.status(statusError).json(data)),
        authError: (data) => (res.status(statusErrorAuth).json(data))
    };
}

module.exports = response