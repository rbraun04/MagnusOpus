// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  router.get("/seats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/seats.html"));
  });

  router.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
