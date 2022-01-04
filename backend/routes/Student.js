let express = require("express");
let router = express.Router();
const Class = require("../models/class");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("In Students ROuter");
});

//Download Material
//from the cid of class, find particular class, get all materials of all courses of that class. find particular material of id

router.get("/Material", function (req, res, next) {
  Class.find("Material")
    .sort("Material")
    .exec(function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    });
});
module.exports = router;
