const express = require('express')
const mongoose = require("mongoose")
require('./config/db')
const app = express()
require('dotenv').config()
const route = require('./routes/auth')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { requireAuth, checkUser } = require('./middleware/middleware');
const cors = require('cors')
const multer = require('multer');



app.use(cors())
app.use(express.json())
app.use(cookieParser());

// Increase payload size limit to 10MB
app.use(bodyParser.json({ limit: '10mb' }));


app.get('*', checkUser);
app.get('/', requireAuth,(req, res) => {
    res.send("home")
})
app.get('/login',(req, res) => {
    console.log(req.body)
})
app.get('/register',(req, res) => {
    console.log(req.body)
})


//product section

const productSchema = mongoose.Schema({
    name: String,
    category:String,
    image: String,
    price: String,
    description: String,
  }); 
  const productModel = mongoose.model("product",productSchema)
  
  
  
  //save product in data 
  //api
  const storage = multer.memoryStorage();
  const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit

  app.post("/uploadProduct", upload.single('file'),async(req,res)=>{
      // console.log(req.body)  
      const data = await productModel(req.body)
      const datasave = await data.save()
      res.send({message : "Upload successfully"})
  })
  
  //
  app.get("/product",async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
  })

app.use("/", route)

//PORT CONNECTED 

app.listen(process.env.PORT, () => {
    console.log(`Server runnning successfully at http://localhost:${process.env.PORT}`)
})