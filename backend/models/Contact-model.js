const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username:String,
        email:String,
        phone:String,
        msg:String
    })

    const UserModel = mongoose.model('userData', userSchema)

    module.exports=UserModel