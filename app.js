const express = require("express");
const dotenv = require("dotenv")

dotenv.config({path:'./config/config.env'})

const app = express()

const PORT = process.env.PORT || 5000;

app.listen(PORT)



//DONE BY ME
// const http = require("http")

// const todo = [
//     {id:1,text:"shayak"},
//     {id:2,text:"shayak"},
//     {id:3,text:"shayak"},
//     {id:4,text:"shayak"},
// ]

// const app = http.createServer((req,res)=>{
//     // console.log(req)
//     res.setHeader('Contant-type','application/json');
//     res.setHeader('X-Powered-By','node.js')
//     res.end(JSON.stringify({
//         success:true,
//         data:todo
//     }))
// })

// app.listen(3000);