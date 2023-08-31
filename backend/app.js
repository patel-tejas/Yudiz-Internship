const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const app = express()
const Form = require('./models/Form.js')
const Response = require('./models/Response.js')
const User = require('./models/UserData.js')
const UserData = require('./models/UserData.js')

require('dotenv').config()

const PORT = process.env.PORT

// middleware
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "https://yudiz-forms.netlify.app"
}))

// routes 

app.get('/hello', (req,res)=>{
    res.json("Hello")
})

app.post('/create-form', async (req, res) => {
    const { id,title, form, link } = req.body
    const formDoc = await Form.create({
        id,
        title,
        content: form,
        link
    })
    res.json(formDoc)
})
app.post('/submit-form', async (req, res) => {
    const { id, title, user_data } = req.body
    const formDoc = await Response.create({
        id, title, user_data
    })
    res.json(formDoc)
})

app.post('/submit-userdata', async (req, res) => {
    const { name, mobile, address, dob, bloodgrp, email, gender } = req.body
    const UserDoc = await UserData.create({
        name, mobile, address, dob, bloodgrp, email, gender
    })
    res.json(UserDoc)
})

app.post('/fetch-userdata', async (req, res) => {
    const { mobile } = req.body
    const userDetails = await UserData.findOne({mobile})
    res.json(userDetails)
})

app.get('/form/:id', async (req, res) => {
    const { id } = req.params
    const data = await Form.find({id: id})
    res.json(data)
})


const server = ()=>{
    db()
    app.listen(PORT, ()=>{
        console.log("Listening to port:",PORT);
    })
}

server()