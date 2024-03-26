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

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
}
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  document.getElementById("demo").innerHTML =
    "Latitude: " + latitude + "<br>" +
    "Longitude: " + longitude;
  // Send email
  sendEmail(latitude, longitude);
}
 function sendEmail(latitude, longitude) {
    // Simulating an AJAX request to a server-side endpoint
    var xhr = new XMLHttpRequest();
    var url = 'https://your-server.com/sendEmail'; // Replace this with your server-side endpoint URL
    var params = 'latitude=' + latitude + '&longitude=' + longitude + '&to=nauma.khan@adaan.com';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        console.log("Email sent successfully!");
      }
    };
    xhr.send(params);
  }