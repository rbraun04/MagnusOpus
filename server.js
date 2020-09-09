// Dependencies
// =============================================================
var express = require("express");
require("dotenv").config()
const db = require("./models")
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
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
app.use(apiRoutes);
app.use(htmlRoutes);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(() => app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}));
