const mongoose = require('mongoose')
const { Schema } = mongoose;

const FormSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    content: [{ name: String, label: String, question_type: String, list: Array }],
    link: {
        type: String
    }

})

module.exports = mongoose.model('form', FormSchema)