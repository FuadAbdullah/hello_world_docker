exports.helloWorld = async function (req, res, next) {
    let message = 'Hello World!'
    res.status(200).json({
        success: true,
        message: message
    })
}