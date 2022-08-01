
const path = require('path')
const express=require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app=express()
const publicDirectoryPath =path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{

        title:'weather',
        name:'Rose Joseph'
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{

        title:'About me',
        name:'Rose Joseph'
    })

})
app.get('/products',(req,res)=>{


    if(!req.query.search){
        res.send({
            error:'you must provide a search term'
        })
    }
   console.log(req.query.search)
    res.send({
        product: []
    })

})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:'you must provide an address'

        })
    }
    res.send({
        forecast:'its raining',
        location:'trivandrum',
        address:req.query.address
    })
  
})
app.get('/help',(req,res)=>{

    res.send({name:'Andrew',
                age:27})
   })

   app.get('/about',(req,res)=>{

    res.send('About')
   })
   
app.listen(3000,()=>{
    console.log('server is up on port 3000.')
})