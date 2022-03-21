const express = require("express")

const Comment = require("../models/comment.model")

const router = express.Router()


router.post("/", async (req, res)=>{
    try {
        const comment = await Comment.create(req.body)
        return res.status(201).send(comment)
    } catch (error) {
        console.log('error:', error)
        
    }
})

module.exports = router