const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());
//Data Base connection with mongodb
// mongoose.connect("mongodb+srv://sauravsharma691999:saurav691999@cluster0.hpkk6.mongodb.net/ECOMMERCE_REACT")

//API Creation
app.get("/",(req,res)=>{
          res.send("Express app is running")
}) 

app.listen(port,(error)=>{
          if(!error){
                    console.log("Server is running on port "+port);
          }
          else{
                    console.log("Error "+port);
          }
})




// Image storage engine
const storage = multer.diskStorage({
   destination: './upload/images',
   filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

   }
})

const upload = multer({storage:storage})

//Creating upload image
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
   req.json({
      success:1,
      image_url:`http://localhost:${port}/images/${req.file.filename}`
   })
})



//Login Signup Code

const Users = mongoose.model('Users',{
          name:{
                    type:String,  
          },
          email:{
                    type:String,
                    unique : true,
          },
          password:{
                    type:String,
                    required:true,
          },
          cartData:{
                    type:Object,
                    date:{
                              type:Date,
                              default :Date.now,
                    }
          }
})


//Creating end point for registring the user

app.post('/signup',async ()=>{
          let check = await Users.findOne({
                    email:req.body.email});
                 if(check){
                    return 
                 }   
})