const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const user = require('./App/Controllers/userController')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user', user.select)
app.post('/user', user.insert)
app.put('/user/:id', user.upadte)
app.delete('/user/:id', user.delete)

app.listen(3000)