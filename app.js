//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];


app.use(bodyParser.urlencoded({extended: true}));
app.use (express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req,res) {

    var today = new Date();
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long"

    };
    var day = today.toLocaleDateString("en-US", options);


    res.render("list", {kindOfDay: day, newListItems: items});

    app.post("/", function(req, res) {
      var item = req.body.newItem
      items.push(item);
      res.redirect("/"); //loops back to line 13 app.get

    });


});





app.listen(3000, function(){
  console.log("Server started on port 3000");
});
