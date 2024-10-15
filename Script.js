// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     document.getElementById("demo").innerHTML =
//     "Geolocation is not supported by this browser.";
//   }
  
//   function showPosition(position) {
//     document.getElementById("demo").innerHTML =
//     "Latitude: " + position.coords.latitude + "<br>" +
//     "Longitude: " + position.coords.longitude;``
//   }
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else { 
  document.getElementById("demo").innerHTML =
  "Geolocation is not supported by this browser.";
}

function showPosition(position) {
  document.getElementById("demo").innerHTML =`<iframe width="100%" height="500px" src="//maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&z=15&output=embed"></iframe>`
}



