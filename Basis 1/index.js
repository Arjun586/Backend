

// require -> import
const express = require("express")

// create the application with name app 
const app = express()

// port is a number that identifies a specfic communication endpoint on a computer
const port = 4000


//in expres, middleware refers to a func that processes incoming requests and can perform varion actions
//adding middleware
app.use(express.json())


//Mounting refers ot the proces of attaching middleware or sub-application to specific paths int he the main express app

// request
app.get("/", (req, res) =>{
    res.send(`<h1>This is heading</h1>`)
})

app.post("/car", (req, res) =>{
    res.send("Received a post request")
})


// is port  no pr koi bhi connection ki koshish hoti hai to callback function call krdo
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

