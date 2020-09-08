const router = require("express").Router();


    // Displays a single vendor, or returns false
router.get("/api/vendors/:vendor", function(req, res) {
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
  router.post("/api/vendors", function(req, res) {
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


  module.exports = router;