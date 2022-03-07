const express = require("express")

const app = express()

app.use(logger)

app.get('/books', (req, res)=>{
    const path = req.path
    console.log('path:', path)
    res.send({ route: `${books}`})
})
app.get('/libraries',checkPermission, (req, res)=>{
    const path = req.path
    console.log('path:', path)
})
app.get('/authors',checkPermission, (req, res)=>{
    const path = req.path
    console.log('path:', path)
})

function logger(req, res, next){
    
    next()
}

function checkPermission(req, res, next){
    if(req.path == '/authors' || req.path == '/libraries'){
        res.send({ route: `${req.path}`, permission: "true"})
    }
    next()

}


app.listen(8080, ()=>{
    console.log("Listening on port 8080")
})