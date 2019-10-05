var db = require("../models");

module.exports = function(app) {
  // Get all students in classrooms
  app.get("/api/classrooms", function(req, res) {
    db.Classrooms.findAll({}).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

  //Get one id from classrooms
  app.get("/api/classrooms/:id", function(req, res) {
    db.Classrooms.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbClassroom) {
      console.log(dbClassroom);
      res.json(dbClassroom);
    });
  });

  // modify existing student in classrooms
  app.put("/api/classrooms/:id", function(req, res) {
    db.Classrooms.update({
      pillar1: req.body.pillar1,
      pillar2: req.body.pillar2,
      pillar3: req.body.pillar3,
      pillar4: req.body.pillar4,
      color: req.body.color,
      descriptioncomments: req.body.descriptioncomments,
      createdAt: req.body.createdAt,
      missingwork: req.body.missingwork
    },
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });




  // Create a new student in classrooms
  app.post("/api/classrooms", function(req, res) {
    db.Classrooms.create(req.body).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });


  

  // Delete an example by id
  app.delete("/api/classrooms/:id", function(req, res) {
    db.Classrooms.destroy({ where: { id: req.params.id } }).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });
};
