const router = require("express").Router();
const path = require("path");
const db = require("../models")
// Basic route that sends the user first to the AJAX Page



router.get("/vendors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vendor_folder/all.html"));
  });

// Basic route that sends the user first to the AJAX Page
router.get("/searchvendors", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/vendor_folder/search.html"));
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/vendorSignUp.html"));
});
router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
router.get("/start", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/start.html"));
});
router.get("/ticketlogin", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/ticketsSignUp.html"));
});
  
router.get("/addvendors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vendor_folder/add.html"));
  });

router.get("/searchvendors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vendor_folder/search.html"));
});
  
  // Displays all vendors

router.get("/vendors", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/vendor_folder/all.html"));
});
  
router.get("/api/vendors", function(req, res) {
  db.vendor.findAll().then(function(vendors){
    return res.json(vendors);
    })
  });
  
  router.get("/seats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/seats.html"));
  });

  router.get("/seats2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/seats2.html"));
  });

  router.get("/reserve2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve2.html"));
  });

  router.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/seats2.html"));
  });

  // If no matching route is found default to home
  // router.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/tickets.html"));
  // });
  

module.exports = router;