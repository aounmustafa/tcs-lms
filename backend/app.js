var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/lms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);

var indexRouter = require("./routes/index");
var StudentRouter = require("./routes/Student");
var adminRouter = require("./routes/admin");
var TeacherRouter = require("./routes/teacher");
var headRouter = require("./routes/head");

var app = express();

app.use("/", indexRouter);
app.use("/students", StudentRouter);
app.use("/teacher", TeacherRouter);
app.use("/admins", adminRouter);
app.use("/head", headRouter);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
