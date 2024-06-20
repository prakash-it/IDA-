const express = require('express')

const User = require('./routes/contact')
const Application = require('./routes/job')

const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/IDA')

mongoose.connection.on('connected',()=>{
    console.log('Data-base is connected');
})

app.get('/',(req,res)=>{
    res.send("Back-server")
})

app.use('/user',User)
app.use('/job',Application)

app.listen(1516,()=>{
    console.log("Server is running");
})