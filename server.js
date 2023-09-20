console.log("web serverni boshladik");
const express = require("express");
const app = express();
const http = require("http");

//1: Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2: Session code

//3: View code
app.set("views", "views");
app.set("view engine", "ejs");


//
app.get("/hello", function(req, res) {
    res.end( `<h1 style="color:blue">Birinchi front loyhamizni boshladik</h1>`);
});

app.get("/second-page", function(req, res) {
    res.end( `<h1 style="color:blue">ikkinchi saxifa</h1>`);
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successully on port: ${PORT}`);
});


