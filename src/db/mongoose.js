const mongoose = require('mongoose')

mongoose.connect('mongoose://127.0.0.1:27017/weberver-api',{
 useNewURLParser:true,
 useCreateIndex:true
})

const User = mongoose.model('user',{

    name:{
        type:String
    },
    age:
    {
        type:Number
    }
})

const me = new User({
    name:'rose',
    age:23
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!',error)
})