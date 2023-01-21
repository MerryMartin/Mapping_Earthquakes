// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>" + feature.properties.name + ": "+ feature.properties.city + ", CA" + "</h2>")
      // .openPopup()
      // .addTo();
  }

}).addTo(map);


// get data from cities.js
let cityData = cities;



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);