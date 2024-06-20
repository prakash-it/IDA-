const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')

const UserModel = require('../models/Job-model')

router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send("User-application-Data")
})

router.get('/get',(req,res)=>{
    UserModel.find({})
    .then(users => {res.json(users);})
    .catch(err => {
        
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
})

router.post('/post',(req, res) => {
    const newUsers = new UserModel(req.body);
    newUsers.save() 
        .then(users => console.log(users)) 
        .catch(err => console.log(err)); 
    res.send("User post page"); 
})


module.exports=router