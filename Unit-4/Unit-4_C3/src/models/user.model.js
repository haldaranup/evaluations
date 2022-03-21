const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true
    },
    lastName:{
        type: String,

    },
    age: {
        type: Number,
        minlength: 1,
        maxlength: 150,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    profileImages:[{url: String}]
},
{
    timestamps: true
})


const User = mongoose.model("user", userSchema)


module.exports = User