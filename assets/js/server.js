// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Reservations (DATA)
// =============================================================
var reservations = [{
    name: "Leo Daniel",
    phoneNumber: "252-123-4567",
    email: "leedizzle@aol.com"
  },
  {
    name: "Johnny Walker",
    phoneNumber: "123-456-7890",
    email: "drunkguy@bar.net"
  },
  {
    name: "Scott Johnson",
    phoneNumber: "252-345-6789",
    email: "js-guru@boss.com"
  }
];

/**
 * id="userName"
 * id="userPhone"
 * id="userEmail"
 * id="userUID"
 **/

var reservationsReal = [];

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

// Displays all tables
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Reservations
// Displays all reservations
app.get("/api/reservations", function (req, res) {
  res.json(reservations);
});

// POST endpoint takes in JSON object
app.post("/api/reservations", function (req, res) {
  if (reservations.length < 5) {
    reservations.push(req.body);
    res.json(true);
  } else {
    waitList.push(req.body);
    res.json(false);
  }
});

// =======================

// request.open('GET', 'url', true);
// request.onload = function () {

//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);

//   if (request.status >= 200 && request.status < 400) {
//     // if reservations >= 5, POST to WAITING-LIST

//     data.forEach(movie => {
//       console.log(movie.title);
//     });
//   } else {
//     console.log('error');
//   }
// }

// request.send();

// ======================

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
