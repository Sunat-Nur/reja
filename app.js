console.log("web serverni boshladik");
const express = require("express");
const res = require("express/lib/response");
const app = express();
//
// let user;
// fs.readFile("database/user.json", "utf8",(err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data)
//     }
// })

// MongoDB call

 const db = require("./server").db();

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3: Views code

app.set("views",   "views");
app.set("view engine",  "ejs",);


// 4 Routing code
app.post("/create-item", (req, res) => {
// TODO: code with db here

});

app.get ("/", function (req, res) {
    res.render("reja");
});

//
// app.get('/author', (req, res) => {
//     res.render('author', {user: user})
// })



module.exports = app;