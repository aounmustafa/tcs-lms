var express = require("express");
var router = express.Router();
var Class = require("../models/class");
var mongoose = require("mongoose");
const students = require("../models/students");

// delete a user using id
router.get("/deletemarks/:id", function (req, res, next) {
  User.findOneAndDelete({ _id: req.params.id }, function (err) {
    if (err) console.log("Error in Deleting marks", err);
    res.send("Marks Deleted Succesfully");
  });
});
