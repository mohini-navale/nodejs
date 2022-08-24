//require modules
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("pug");
const app = express();
const Register = require("./db/db");
const receipe = require("./db/conn");

//mongodb connection
const conn = mongoose.connect("mongodb://localhost/user").then(() => {
  console.log("connected successfully");
});


//url encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
//send json data
app.use(express.json());


//used to connect frontend
app.set("view engine", "pug");
app.set("views", "./views");



//endpoints
app.get("/", (req, res) => {
  res.render("registration.pug");
});


app.post("/", async (req, res) => {
  console.log("this is post request", req.body);
  try {
    const name = req.body.name;
    const email = req.body.email;
    const con =req.body.cotact
    const pass = req.body.password;
    if ((name && email && con && pass)!="") {
      var data = await new Register({
        "name": name,
        "contact":con,
        "email": email,
        "password": pass,
      });

      await data.save();
      res.render("login.pug")
    } 
    else {
      res.render("invalid.pug")
    }
  } 
  catch (error) {
     res.render("exist.pug")
  }
  res.render("registration.pug");
});





app.get("/login", (req, res) => {
  res.render("login.pug");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const users1 = await Register.findOne({ email: email });
    if (users1) {
      if (email == users1.email && password == users1.password) {
        res.redirect("/home");
      } else {
        res.render("invalid.pug");
        // res.send("invalid login credentials")
      }
    }
     else {
      res.render("notexist.pug")
    }
  } catch (error) {
    res.render("/notexist.pug")
  }
});

app.get("/home",(req,res)=>{
  res.render("home1.pug")
})

app.get("/contact",(req,res)=>{
  res.render("contact.pug")
})
app.get("/about", (req, res) => {
  res.render("about.pug");
});

app.get("/services", (req, res) => {
  res.render("services.pug");
});

app.get("/invalid", (req, res) => {
  res.render("invalid.pug");
});

app.listen(8080, () => {
  console.log("port running 8080");
});


//end the application