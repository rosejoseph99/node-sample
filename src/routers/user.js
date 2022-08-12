
const express  = require('express')
const multer = require('multer')
const User = require ('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router() 

router.post('/users', async (req, res) => {
    const user = new User(req.body)
})


const multer = require('multer')
const upload = multer({
    dest: 'avatars',
    limits: {
        fileSize:1000000
      },
      fileFilter(req,file,cb)
      {  
        if(file.originalname.match(/\.(jpg|jpeg|png)$/))
        {
    return cd(new error('please upload a image'))
        }
        
        cb(undefined,true)
        
    
      }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
    res.send()
})

module.exports = router