// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var reservation = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all characters
app.get("/viewtables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

// Displays a single character, or returns false
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));

});

// Create New Characters - takes in JSON input
app.post("/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newresveration= req.body;

  console.log(newresveration);

  // We then add the json the user sent to the character array
  reservation.push(newresveration);

  // We then display the JSON to the users
  res.json(newresveration);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
