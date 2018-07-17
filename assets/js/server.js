// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});



// Displays all characters
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Reservations
// POST endpoint takes in JSON object
app.post("/reservations", function (req, res) {
      // check if there is any place left






      // Starts the server to begin listening
      // =============================================================
      app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
      });
