const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String
    },
    mobile: {
        type: String
    },
    address:{
        type: String
    },
    gender:{
        type: String
    },
    dob:{
        type: String
    },
    email:{
        type: String
    },
    bloodgrp:{
        type: String
    },
    
})

module.exports = mongoose.model('userData', UserSchema)