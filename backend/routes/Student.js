let express = require("express");

let router = express.Router();
const Class = require("../models/class");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("In Students ROuter");
});

router.get("/materials/:id/:fn", (req, res, next) => {
  let id = req.params.id;
  let fn = req.params.fn;

  let mat = [];
  Class.findById(id, (err, data) => {
    if (err) res.send(err);
    mat = data.Material;
  });

  for (let i in mat) {
    if (mat[i] === fn) {
      res.download(mat[i]);
      break;
    }
  }
});

module.exports = router;
