const express = require("express");
const app = express();
const port = 8080;
const route = require("./routes/feedRouter")

app.use('/feed', route)

app.listen(port, ()=>{
    console.log("Server on")
})