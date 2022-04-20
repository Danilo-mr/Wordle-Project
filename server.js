var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/validar-palavra", function(req, res) {
    /*let letras = document.getElementById("linha-1"); 
    for(let i=0; i<letras.length; i++) {
        console.log(letras[i]);
    }*/
    
    console.log(req);
    
})

app.listen(3000);