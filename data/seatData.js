// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var seatArray = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    licenseID: "AE89AKD",
    phoneNumber: "000-000-0000",
    carMake: "Toyota",
    carModel: "Supra"
  },
  {
    customerName: "Aidan",
    customerEmail: "aidan@example.com",
    licenseID: "FIDL938",
    phoneNumber: "000-000-0000",
    carMake: "Honda",
    carModel: "Civic"
  },
  {
    customerName: "Chris",
    customerEmail: "chris@example.com",
    licenseID: "CLKJ808",
    phoneNumber: "000-000-0000",
    carMake: "Subaru",
    carModel: "Frontier"
  },
  {
    customerName: "James",
    customerEmail: "james@example.com",
    licenseID: "KJKD007",
    phoneNumber: "000-000-0000",
    carMake: "Nissan",
    carModel: "GTR"
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = seatArray;
