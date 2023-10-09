//app create
const express = require("express");
const app = express();

//PORt find krna h 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware add krne h 
app.use(express.json());
//middleware for uploading files
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    //this is for creating temp folder
    tempFileDir : '/tmp/'
}));

//db connect
const db = require("./config/database");
db.connect();

//cloud se connect krna h 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount krna h 
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

//activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})