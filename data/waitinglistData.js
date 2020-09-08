// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var waitingArray = [
  {
    customerName: "Saima",
    customerEmail: "saima@example.com",
    licenseID: "saimaCool",
    phoneNumber: "000-000-0000",
    carMake: "Nissan",
    carModel: "Rogue"
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingArray;
