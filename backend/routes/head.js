var express = require("express");
var router = express.Router();
const Student = require("../models/students");

router.get("/results/student/:id", function (req, res, next) {
  var id = req.params.id;
  Student.find({ _id: id }).exec(function (error, data) {
    if (error) {
      throw error;
    } else {
      res.send(JSON.parse(data.Student_Result));
    }
  });
});

module.exports = router;
