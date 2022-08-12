const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.listen(port,() =>{
    console.log('server is up on port ' + port)
})

  const jwt = require('jsonwebtoken')

  const myFunction = async() =>{
    const token = jwt.sign({ _id: 'abc123' },'this is my new course')
    console.log(token)
  }

  myFunction()
