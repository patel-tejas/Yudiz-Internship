const mongoose = require('mongoose')
const { Schema } = mongoose;

const ResponseSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    user_data: [{ question: String, answer: String, question_type: String, list: Array }],
})

module.exports = mongoose.model('response', ResponseSchema)