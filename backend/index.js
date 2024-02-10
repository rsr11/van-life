const express = require("express");
const allVans = require("./allVans.json");


const app = express();


app.get("/",(req,res)=>{
    res.send("backend of vanLife")
})


app.get("/api/allvans", (req,res)=>{
    res.send(allVans);
})

app.get("./")

app.listen(3000,()=>{
    console.log("server working on port 3000");
})
