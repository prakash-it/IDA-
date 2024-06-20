const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username:String,
        email:String,
        phone:String,
        year :String,
        job: String,
        percentage: String
    })


    const UserModel = mongoose.model('application-data', userSchema)

    module.exports=UserModel