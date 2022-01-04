let express = require("express");
let router = express.Router();
const Class = require("../models/class");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("In Students ROuter");
});

//Download Material
//from the cid of class, find particular class, get all materials of all courses of that class. find particular material of id
router.get("/material/:cid/:id", function (req, res, next) {
  let cid = req.params.cid;
  let id = req.params.id;
  let courseArr = [];
  Class.find({ _id: cid }).exec(function (error, data) {
    if (error) {
      throw error;
    } else {
      courseArr = JSON.parse(data.Courses);
      courseArr.forEach((element) => {
        if (element.Course_id == id) {
          res.send(element.Materials);
        }
      });
    }
  });
});
module.exports = router;
