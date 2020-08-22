const express = require('express')
const app = express()
const port = 3000

app.get('/ticket.js', (req, res) => {
  res.sendFile(__dirname + "/ticket.js")
})

app.listen(port)