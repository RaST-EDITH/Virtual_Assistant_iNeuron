const express=require('express')
const path=require('path')
const hbs=require('hbs')

const app=express()
const port=process.env.PORT || 3000

const publicpath=path.join(__dirname,'../public')
const viewpath= path.join(__dirname,'../views')
const index=path.join(__dirname,'../')


app.set('views',viewpath)
app.set('view engine','hbs')
app.use(express.static(publicpath))

app.get('',(req,res)=>{
    res.sendFile(index+"index.html")
})

app.get('/assist',(req,res)=>{
    res.render('chatbot',{
        title:"Any",
        name:"any2"
    })
})

app.listen(port,()=>{
    console.log("Server is listening on port 3000")
})