console.log("web serverni boshladik");
const express = require("express");
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
 console.log(req.body);
 const new_reja = req.body.reja;
 db.collection("plans").insertOne({ reja: new_reja}, (err, data) => {
    if (err) {
        console.log(err);
        res.end("something went wring");
    } else {
        res.end("successfully added");
    }
 });
});

 app.get ("/", function (req, res) {
   db.collection("plans")
       .find()
       .toArray((err, data) => {
       if(err) {
           console.log(err);
           res.end("something went wrong");
       } else {
           console.log(data);
           res.render("reja", { items: data});
       }
    });
});

//
// app.get('/author', (req, res) => {
//     res.render('author', {user: user})
// })



module.exports = app;