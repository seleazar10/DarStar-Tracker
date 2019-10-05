require("dotenv").config();
var express = require("express");
const sendMail = require('./mail');
const { log } = console;
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// email, subject, text
app.post('/email', (req, res) => {
  const { subject, email, text } = req.body;
  log('Data: ', req.body);

  sendMail(email, subject, text, function(err, data) {
      if (err) {
          log('ERROR: ', err);
          return res.status(500).json({ message: err.message || 'Internal Error' });
      }
      log('Email sent!!!');
      return res.json({ message: 'Email sent!!!!!' });
  });
});


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
