var path = require("path");
// var db = require("../models");


module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/parent.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/parent.html"));
  });

  app.get("/teacher.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/teacher.html"));
  });

  app.get("/contact.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
};
