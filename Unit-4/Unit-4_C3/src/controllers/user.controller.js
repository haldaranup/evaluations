const express = require("express")
const User = require("../models/user.model")

const router = express.Router()

router.post("/", async (req, res)=>{
    try {
        const user = await User.create(req.body).lean().exec()
        return res.status(201).send(user)
    } catch (error) {
        console.log('error:', error)
        
    }
})

module.exports = router