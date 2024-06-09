require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/learn', (req,res) => {
    res.send("Learn with Kishan")
})

app.get('/login', (req,res)=> {
    res.send('<h1>Hello you have successfully logged in!</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})