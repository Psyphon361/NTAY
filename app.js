//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {

    res.render("home", {
        title: "NTAY | Home"
    });
});

app.get("/objectives", function(req, res) {

    res.render("objectives", {
        title: "NTAY | Objectives"
    });
});

app.get("/aboutus", function(req, res) {

    res.render("aboutUs", {
        title: "NTAY | About Us"
    });
});

app.get("/contactus", function(req, res) {

    res.render("contactUs", {
        title: "NTAY | Contact Us"
    });
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server started on port 3000!");
});
