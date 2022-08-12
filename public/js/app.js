

console.log("client side javascript file is loaded")

// fetch('http://puzzle.mead.io.puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })

// })

fetch('http://localhost:3000/weather?address=trivandrum').then((response)=>{
    response.json().then((data)=>{

        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.forecast)
            console.log(data.location)
        }
      
    })
})
const weatherForm = document.querySelector('form')
weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    console.log('testing!')

})
