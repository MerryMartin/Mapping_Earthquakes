// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/MerryMartin/Mapping_Earthquakes/main/majorAirports.json"

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"14",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// GeoJSON data coordinates are set with the first parameter as X (longitude) 
// and the second parameter as Y (latitude), as documented in the GeoJSON Standard. 
// The L.geoJSON()layer reverses the coordinates to plot them on the map.

// Grabbing our GeoJSON data.
// L.geoJSON(geojsonFeature).addTo(map);
// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .addTo(map)
//     .bindPopup("<h2>" + feature.properties.name + ": "+ feature.properties.city + ", CA" + "</h2>")
//     .openPopup();
//   }

// }).addTo(map);

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
    layer.bindPopup("hello")
  }
}).addTo(map);
});

// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h2>" + feature.properties.name + ": "+ feature.properties.city + ", CA" + "</h2>")
//       // .openPopup()
//       // .addTo();
//   }

// }).addTo(map);






