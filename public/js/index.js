console.log('The app is running')
// import { writeFileSync, readFileSync } from 'fs'

const Form = document.querySelector('form')
const search= document.querySelector('input')
const messageone=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')
const messagethree=document.querySelector('#message-3')
const messagefour=document.querySelector('#message-4')


setTimeout(()=>messageone.textContent='Hello',2000)
setTimeout(()=>messagetwo.textContent='Enter the query',4000)

// Form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     writeFileSync('input.txt',`${query}`)
//     readFileSync('output.txt','utf8')

    // fetch('http://localhost:3000/weather?address='+address).then((response) => {
    // response.json().then((data)=>{
    //     const obj=data
    //     if(obj.error){
    //         messageone.textContent=obj.error
    //         messagetwo.textContent=""
    //     }else{
    //         messageone.textContent=obj.text
    //         messagetwo.textContent=obj.precip
    //     }
    // })
// })
// })