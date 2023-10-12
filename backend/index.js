const express = require('express')
require('./config/db')
const app = express()
require('dotenv').config()
const route = require('./routes/auth') 
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/middleware');
const cors = require('cors')

app.use(express.json())
app.use(cookieParser());
app.use(cors())


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

app.use("/", route)

//PORT CONNECTED 

app.listen(process.env.PORT, () => {
    console.log(`Server runnning successfully at http://localhost:${process.env.PORT}`)
})