// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     document.getElementById("demo").innerHTML =
//     "Geolocation is not supported by this browser.";
//   }
  
//   function showPosition(position) {
//     document.getElementById("demo").innerHTML =
//     "Latitude: " + position.coords.latitude + "<br>" +
//     "Longitude: " + position.coords.longitude;
//   }

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(showPosition);
// } else {
//   document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
// }
// function showPosition(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//   document.getElementById("demo").innerHTML =
//     "Latitude: " + latitude + "<br>" +
//     "Longitude: " + longitude;
//   // Send email
//   sendEmail(latitude, longitude);
// }
//  function sendEmail(latitude, longitude) {
//     // Simulating an AJAX request to a server-side endpoint
//     var xhr = new XMLHttpRequest();
//     var url = 'https://test-sandy-two-35.vercel.app/sendEmail'; // Replace this with your server-side endpoint URL
//     var params = 'latitude=' + latitude + '&longitude=' + longitude + '&to=nauma.khan@adaan.com';
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(xhr.responseText);
//         console.log("Email sent successfully!");
//       }
//     };
//     xhr.send(params);
//   }

const { MongoClient } = require('mongodb');
// Connection URI
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Function to insert geolocation data into MongoDB
async function insertGeolocation(latitude, longitude) {
  try {
    await client.connect();
    const database = client.db('your_database_name'); // Replace 'your_database_name' with your actual database name
    const collection = database.collection('geolocations');
    const timestamp = new Date();
    const result = await collection.insertOne({
      latitude,
      longitude,
      timestamp
    });
    console.log('Geolocation data inserted with ID:', result.insertedId);
  } finally {
    await client.close();
  }
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    insertGeolocation(latitude, longitude);
  });
} else {
  document.getElementById('demo').innerHTML = 'Geolocation is not supported by this browser.';
}