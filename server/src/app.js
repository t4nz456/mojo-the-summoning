const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const views = require('./views')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.get('/', (_req, res) => {
  res.send('Welcome to Mojo: The Summoning!')
})

app.use('/user', views.user.router)

module.exports = app
