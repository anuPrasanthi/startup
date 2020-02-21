const StartUp = require('../models/startup-model')

createStartUp = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a startup',
        })
    }

    const startup = new StartUp(body)

    if (!startup) {
        return res.status(400).json({ success: false, error: err })
    }

    startup
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: startup._id,
                message: 'Startup created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Startup not created!',
            })
        })
}





getStartUps = async (req, res) => {
    await StartUp.find({}, (err, startup) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!startup.length) {
            return res.status(404).json({
                success: false,
                error: `Movie not found`
            })
        }
        return res.status(200).json({
            success: true,
            data: startup
        })
    }).catch(err => console.log(err))
}
module.exports = {
    createStartUp,
    getStartUps,

}