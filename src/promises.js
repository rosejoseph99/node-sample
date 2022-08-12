const add =(a,b) =>{
    return new Promise((resolve,reject)=>{
        if (a < 0 || b < 0) {                 
            return reject('Numbers must be non-negative')
        } 
        setTimeout(() =>{
            resolve(a+b)
        })
    })
}
add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,-4)
}).then((sum2) =>{
    console.log(sum2)

}).catch((e) => {
    console.log(e)
})