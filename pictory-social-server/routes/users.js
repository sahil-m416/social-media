const router = require('express').Router()
const User = require('../models/User')

router.route("/:id").get(async function (req, res){
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})


module.exports = router