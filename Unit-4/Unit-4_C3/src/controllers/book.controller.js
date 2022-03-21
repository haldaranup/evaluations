const express = require("express")

const Book = require("../models/book.model")

const router = express.Router()


router.post("/", async (req, res)=>{
    try {
        const book = await Book.create(req.body).lean().exec()
        return res.status(201).send(book)
    } catch (error) {
        console.log('error:', error)
        
    }
})

module.exports = router