const express = require("express")
const connect = require("./configs/db")
const booksController = require("./controllers/book.controller")
const commentsController = require("./controllers/comment.controller")
const userController = require("./controllers/user.controller")

const app = express()
app.use(express.json())


app.use("/book", booksController)
app.use("/comment", commentsController)
app.use("/user", userController)





app.listen(3000, async()=>{
    try {
        await connect()
        console.log("Listening on port 3000")
    } catch (error) {
        console.log('error:', error)
        
    }
})