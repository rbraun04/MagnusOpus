const router = require("express").Router();
var seatData = require("../data/seatData");
var waitListData = require("../data/waitinglistData");

const db = require("../models")




  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  router.get("/api/seats", function(req, res) {
    res.json(seatData);
  });

  router.get("/api/waitlist", function(req, res) {
    res.json(waitListData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  router.post("/api/seats", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (seatData.length < 50) {
      seatData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  router.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    seatData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });


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
  
    Vendors.push(newVendor);
  
    res.json(newVendor);
  });


  router.get("/api/seed/vendor", (req, res) => {
    db.vendor.bulkCreate(seatData)
    then(response => res.json("vendors seeded!"));
  })


  router.get("/api/seed/ticketing", (req,res)=> {
    db.ticket.bulkCreate(seatData)
    .then(response => res.json("ticketing seeded!"))
  })


  //dummy routes

  router.post("/dummy/ticket", (req,res)=> {
    db.ticket.create({
      customerName: "Richard",
      customerEmail: "richard@richard.com",
      customerlicenseID: "E298HD",
      carMake: "Bugatti",
      carModel: "Chiron",
      reservationNumber: 3
    })
  })

  router.post("/dummy/vendor", (req,res)=> {
    db.vendor.create({
      name: "Ryan",
      description: "ryan@ryan.com",
      option1: "burger",
      option2: "sphagetti",
      option3: "tuna salad",
      option4: "macaroni",
      option5: "fries",
      ticketId: 3
    })
  })

  router.get("/api/ticket/:id", (req,res)=> {
    db.ticket.findOne({
      where: {id:req.params.id},
      include: db.vendor
    }).then(data=> res.json(data))
  })

  module.exports = router;