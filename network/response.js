exports.success = (req, res, status, messaje) => {
    res.status(status || 200).send(
        {
            'error': '',
            'body': messaje
        }
    )
}

exports.error = (req, res, status, messaje) => {
    res.status(status || 400).send(
        {
            'error': messaje,
            'body': ''
        }
    )
}