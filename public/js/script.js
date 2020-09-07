
var personalAPIKey = "AIzaSyA0rdSnRWTkL1PyhoHgsMoYfs8GhAJbJnw";
const addresses = {
    dodgerStadium: "1000+Vin+Scully+Ave,+Los+Angeles,+CA",
    roseBowl: "1001+Rose+Bowl+Dr,+Pasadena,+CA",
    theForum: "3900+W+Manchester+Blvd,+Inglewood,+CA",
    queenMary: "1126+Queens+Hwy,+Long+Beach,+CA"
}
// ///////////////////////////////////////////////////////////////////
//initialize the app after googlemaps api cdn is loaded;
function init(){
    $("button").on("click", function(){
        const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addresses[$(this).attr("id")] + "&key=" + personalAPIKey;

        $.ajax({
    url: url,
    method: "GET"
}).then(function(response){
    var latitude = response.results[0].geometry.location.lat;
    var longitude = response.results[0].geometry.location.lng;
    console.log(response);
    console.log("formatted address: ", response.results[0].formatted_address);


        var  saguaro = {lat: latitude, lng: longitude};
        var map = new google.maps.Map(
            document.getElementById("map"),
            {zoom: 16, center: saguaro}
        );
    
        var marker = new google.maps.Marker({
            position: saguaro, map: map
        })
    })
});
};

$(document).ready(init);
// var dodgerStadiumAddress = 

// var DODGERurl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + dodgerStadiumAddress + "&key=" + personalAPIKey;

// $.ajax({
//     url: DODGERurl,
//     method: "GET"
// }).then(function(response){
//     var latitude = response.results[0].geometry.location.lat;
//     var longitude = response.results[0].geometry.location.lng;
//     console.log(response);
//     console.log("formatted address: ", response.results[0].formatted_address);

//     function dodgerStadiumMap(){


//         var  saguaro = {lat: latitude, lng: longitude};
//         var map = new google.maps.Map(
//             document.getElementById("map"),
//             {zoom: 16, center: saguaro}
//         );
    
//         var marker = new google.maps.Maker({
//             position: saguaro, map: map
//         })
//     }
//     dodgerStadiumMap();
// })


// function dodgerStadiumMap(){
//     console.log("Welcome to Dodger Stadium!");
// }

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var roseBowlAddress = "1001+Rose+Bowl+Dr,+Pasadena,+CA";

// var ROSEBOWLurl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + roseBowlAddress + "&key=" + personalAPIKey;

// $.ajax({
//     url: ROSEBOWLurl,
//     method: "GET"
// }).then(function(response){
//     var latitude = response.results[0].geometry.location.lat;
//     var longitude = response.results[0].geometry.location.lng;
//     console.log(response);
//     console.log("formatted address: ", response.results[0].formatted_address);

//     function roseBowlMap(){


//         var  saguaro = {lat: latitude, lng: longitude};
//         var map = new google.maps.Map(
//             document.getElementById("map"),
//             {zoom: 16, center: saguaro}
//         );
    
//         var marker = new google.maps.Maker({
//             position: saguaro, map: map
//         })
//     }
//     roseBowlMap();
// })


// function roseBowlMap(){
//     console.log("Welcome to the Rose Bowl");
// }

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var theForumAddress = "3900+W+Manchester+Blvd,+Inglewood,+CA"

// var theForumURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + theForumAddress + "&key=" + personalAPIKey;

// $.ajax({
//     url: theForumURL,
//     method: "GET"
// }).then(function(response){
//     var latitude = response.results[0].geometry.location.lat;
//     var longitude = response.results[0].geometry.location.lng;
//     console.log(response);
//     console.log("formatted address: ", response.results[0].formatted_address);

//     function theForumMap(){


//         var  saguaro = {lat: latitude, lng: longitude};
//         var map = new google.maps.Map(
//             document.getElementById("map"),
//             {zoom: 16, center: saguaro}
//         );
    
//         var marker = new google.maps.Maker({
//             position: saguaro, map: map
//         })
//     }
//     theForumMap();
// })


// function theForumMap(){
//     console.log("Welcome to The Forum!");
// }


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var queenMaryAddress = "1126+Queens+Hwy,+Long+Beach,+CA"

// var queenMaryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + queenMaryAddress + "&key=" + personalAPIKey;

// $.ajax({
//     url: queenMaryURL,
//     method: "GET"
// }).then(function(response){
//     var latitude = response.results[0].geometry.location.lat;
//     var longitude = response.results[0].geometry.location.lng;
//     console.log(response);
//     console.log("formatted address: ", response.results[0].formatted_address);

//     function queenMaryMap(){


//         var  saguaro = {lat: latitude, lng: longitude};
//         var map = new google.maps.Map(
//             document.getElementById("map"),
//             {zoom: 17, center: saguaro}
//         );
    
//         var marker = new google.maps.Maker({
//             position: saguaro, map: map
//         })
//     }
//     queenMaryMap();
// })


// function queenMaryMap(){
//     console.log("Welcome to The Queen Mary!");
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var queenMaryAddress = "1126+Queens+Hwy,+Long+Beach,+CA"

// var queenMaryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + queenMaryAddress + "&key=" + personalAPIKey;

// $.ajax({
//     url: queenMaryURL,
//     method: "GET"
// }).then(function(response){
//     var latitude = response.results[0].geometry.location.lat;
//     var longitude = response.results[0].geometry.location.lng;
//     console.log(response);
//     console.log("formatted address: ", response.results[0].formatted_address);

//     function queenMaryMap(){


//         var  saguaro = {lat: latitude, lng: longitude};
//         var map = new google.maps.Map(
//             document.getElementById("map"),
//             {zoom: 17, center: saguaro}
//         );
    
//         var marker = new google.maps.Maker({
//             position: saguaro, map: map
//         })
//     }
//     queenMaryMap();
// })


// function queenMaryMap(){
//     console.log("Welcome to The Queen Mary!");
// }