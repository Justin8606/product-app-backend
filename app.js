const express = require("express")
const mongoos = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add",(req,res)=>{
    res.send("Add Page")
})

app.post("/view",(req,res)=>{
    res.send("View page")
})
app.listen(8080,()=>{
    console.log("server")
})
