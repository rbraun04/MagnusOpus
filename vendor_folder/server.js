// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Vendors (DATA)
// =============================================================
var vendors = [


];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all vendors
app.get("/api/vendors", function(req, res) {
  return res.json(vendors);
});

// Displays a single vendor, or returns false
app.get("/api/vendors/:vendor", function(req, res) {
  var chosen = req.params.vendor;

  console.log("start here what is this?: ", chosen);

  for (var i = 0; i < vendors.length; i++) {
    if (chosen === vendors[i].routeName) {
      return res.json(vendors[i]);
    }
  }

  return res.json(false);
});

// Create New Vendors - takes in JSON input
app.post("/api/vendors", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newVendor = req.body;

  // Using a RegEx Pattern to remove spaces from newVendor
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newVendor.routeName = newVendor.name.replace(/\s+/g, "").toLowerCase();

  console.log(newVendor);

  vendors.push(newVendor);

  res.json(newVendor);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
