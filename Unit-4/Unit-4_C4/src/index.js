const express = require("express")
const userController = require("./controllers/user.controller")
const todoController = require("./controllers/todo.controller")
const connect = require("./configs/db")

const app = express()
app.use(express.json())


app.use("/register", userController)
app.use("/login", userController)
app.use("/todos", todoController)
app.use("/todos/:id", todoController)


app.listen(3000, async()=>{
    try {
        await connect()
        console.log("Listening on port 3000")
    } catch (error) {
        console.log('error:', error)
        
    }
})