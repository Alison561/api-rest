const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const user = require('./App/Controllers/userController')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user', user.select)
app.get('/user/:id', user.findOne)
app.post('/user', user.insert)
app.put('/user/:id', user.upadte)
app.delete('/user/:id', user.delete)

app.listen(3000)