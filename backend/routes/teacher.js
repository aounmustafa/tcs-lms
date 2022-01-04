var express = require("express");
var router = express.Router();
var Class = require("../models/class");
var mongoose = require("mongoose");

let express = require("express");
let router = express.Router();
const students = require("../models/students");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("In Students ROuter");
});
// delete a user using id
router.get("/deletemarks/:id", function (req, res, next) {
  User.findOneAndDelete({ _id: req.params.id }, function (err) {
    if (err) console.log("Error in Deleting marks", err);
    res.send("Marks Deleted Succesfully");
  });
});
