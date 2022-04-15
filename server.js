var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/validar-palavra", function(req, res) {
    
})

app.listen(3000);