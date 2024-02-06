const express = require("express");
const app = express();
const port = 8080;
const routerFeed = require("./routes/feedRouter")
const routerLogin = require("./routes/loginRouter")

//Json parser = middleware para captar os json do client
app.use(express.json());

app.use('/feed', routerFeed)
app.use('/login', routerLogin)


app.use((req, res, next)=>{
    //metodos para acessar o manipular pelo header
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
})
//captar todas rotas do feedrouter

app.listen(port, ()=>{
    console.log("Server on")
})