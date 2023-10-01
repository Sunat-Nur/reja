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
     console.log("user entered / create-item")
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
   console.log("user entered /");
     db.collection("plans")
       .find()
       .toArray((err, data) => {
       if(err) {
           console.log(err);
           res.end("something went wrong");
       } else {
           res.render("reja", { items: data});
       }
    });
});

//
// app.get('/author', (req, res) => {
//     res.render('author', {user: user})
// })

module.exports = app;





// const express = require("express");
// const app = express();
//
//
// // Mongodb connect
// const db = require("./server").db();
//
// //1 KIRISH CODE
//
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
//
// //2
// //3VIEWS CODE
//
// app.set("views", "views");
// app.set("view engine", "ejs");  /// ejs ni ichida biz frontend ni yasymiz
//
//
// //4routing code
// app.post("/create-item", (req, res) =>{
//     console.log("user entered /create-item");
//
//     const new_reja = req.body.Reja;
//     db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
//         console.log(data.ops);
//         req.json(data.ops[0]);
//     });
// });
//
// app.get("/", function (req, res)   {
//     console.log("user etered /")
//     db.collection("plans")
//         .find()
//         .toArray((err, data) =>{
//             if (err) {
//                 console.log(err);
//                 res.end("something went wraong");
//             } else {
//                 console.log(data);
//                 res.render("Reja",{items: data} );
//             }
//         })
//
// });
//
// module.exports = app;