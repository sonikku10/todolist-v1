//jshint esversion:6


const express = require("express");
const bodyPar = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req,res) {

    var today = new Date();
    var currentDay = today.getDay()
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = day[currentDay];


    res.render("list", {kindOfDay: dayOfWeek});
});





app.listen(3000, function(){
  console.log("Server started on port 3000");
});
