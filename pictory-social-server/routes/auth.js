const router = require('express').Router()
const User = require('./../models/User')
const bcrypt = require('bcrypt')


// User Registration Here
router.route("/register").get(async function(req, res){

}).post(async function(req, res){
    try {
        const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword 
    })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        console.error(error)
    }
})



// User Login Here

router.route("/login").get(function(req, res) {res.end("login")}).post(async function(req, res) {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).send("User not found")
        
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("password is incorrect")
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router