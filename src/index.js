const express = require('express')
// require('./db/moongoose')
const User = require ('./models/user')

const app = express()
const port  = process.env.PORT || 3000

const multer = require('multer')


const upload = multer({
  dest:'images',
  limits: {
    fileSize:1000000
  },fileFilter(req,file,cb){  
    if(!file.originalname.match(/\.(doc\|docx)$/)){
      return cb(new Error('please upload a word document'))
    }
    
    cb(undefined,true);
  }

})

app.post('/upload',upload.single('upload'),(req,res)=>{
  res.send();
})






// const errorMiddleware = (req,res,next)=>{
//   throw new Error('From my middleware')

// }
// app.post('/upload',errorMiddleware ,(req, res)=>{
//   res.send()
// },(error,req,res,next) =>{
//  res.status(400).send({error:error.message})
// })



app.use(express.json())


app.post('/users',(req,res)=>{
    console.log(req.body)
    res.send('testing')


 })

app.listen(port ,()=>{ 
    console.log('server is up on port ' + port)
})