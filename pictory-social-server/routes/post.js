const Post = require('../models/Post')

const router = require('express').Router()


//! Create post

router.route('/').get(function(req, res) {
    console.log("Done")
    res.end("sahil")
}).post(async function(req, res) {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// ! like Dislike POst

// Todo: Add comment functionality here


router.put("/:id/like", async function(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push:{likes: req.body.userId}})
            res.status(200).json("Post has been liked")
        } else {
            await post.updateOne({$pull:{likes: req.body.userId}})
            res.status(200).json("Post has been disliked")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


// ! Handle comments here

router.put("/:id/comment", async function (req, res) {
    try{
        const post = await Post.findById(req.params.id)
        const toSend = {
            name: req.body.name,
            comment: req.body.comment
        }
        await post.updateOne({$push: {comments : toSend}})
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})



// ! Getting one post by id


router.get("/:id", async function(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// ! Getting All posts


router.route("/timeline/all").get(async function(req, res){
    try {
        const post = await Post.find({})
    res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// ! Getting all comments post wise

router.route("/:id/getAllComments").get(async function(req, res){
    try {
        const comments = await Post.findById(req.params.id)
        res.status(200).json(comments)
    } catch (error) {
        
    }

})

module.exports = router