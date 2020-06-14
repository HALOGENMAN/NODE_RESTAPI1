const express = require("express");
const dotenv = require("dotenv")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()

MONGOOSE_URI='mongodb+srv://shayak:159951sm357753@cluster0-fidtq.mongodb.net/api1?retryWrites=true&w=majority'


dotenv.config({path:'./config/config.env'})

const bootcamps = require("./routes/bootcamps");
const { request } = require("http");



// //middleware
// const logger = require("./middleware/logger")
// app.use(logger)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use('/api/v1/bootcamps',bootcamps)

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGOOSE_URI)
    .then(()=>{
        app.listen(PORT)
        console.log("CONNECTED!")
    })
    .catch(err=>console.log(err))



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