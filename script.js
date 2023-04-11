// Initiation of the map
const mymap = L.map('map').setView([50.760918, 4.110170], 4);
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

osm.addTo(mymap)

const markers = [
    {
      "id": 1,
      "latitude": 50.760918,
      "longitude": 4.110170,
      "name": "ВАЗ"
    },
    {
      "id": 2,
      "latitude": 47.492647,
      "longitude": 19.051399,
      "name": "ГАЗель"
    },
    {
      "id": 3,
      "latitude": 41.902689,
      "longitude": 12.496176,
      "name": "Lexus"
    },
    {
      "id": 4,
      "latitude": 43.779787,
      "longitude": 11.265817,
      "name": "Volkswagen"
    },
    {
      "id": 5,
      "latitude": 52.373057,
      "longitude": 4.892557,
      "name": "Lada"
    },
    {
      "id": 6,
      "latitude": -22.903150,
      "longitude": -43.189903,
      "name": "Kia"
    },
    {
      "id": 7,
      "latitude": 38.716174,
      "longitude": -9.141589,
      "name": "Bentli"
    },
    {
      "id": 8,
      "latitude": 50.080293,
      "longitude": 14.428983,
      "name": "Porche"
    },
    {
      "id": 9,
      "latitude": 48.856663,
      "longitude": 2.351556,
      "name": "BMW"
    },
    {
      "id": 10,
      "latitude": 45.438095,
      "longitude": 12.319029,
      "name": "Honda"
    }
]

// Markers and their click function

markers.forEach(function (marker) {   
    var newMarker = L.marker([marker.latitude, marker.longitude]).addTo(mymap);
    newMarker.on('click', function() {
        mymap.flyTo([marker.latitude, marker.longitude], 10);
    });
});
  
// Initiation of Search 

document.getElementById("theSearch").addEventListener('input', function (e) {
    if  (e.target.value.length == 0) {
        document.getElementById("theResults").innerHTML = ""
        mymap.flyTo([50.760918, 4.110170], 4)
    } else {
        searchByName(e.target.value)
    }
})

// Search Logic

let prevSearchTerm = "";

function searchByName(searchTerm) {
  if (searchTerm === prevSearchTerm) {
    return;
  }
  const searchResultsDiv = document.getElementById("theResults");
  searchResultsDiv.innerHTML = "";
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
        const namezButton = document.createElement("button");
        namezButton.classList.add("namez");
        searchResultsDiv.appendChild(namezButton);
        namezButton.innerHTML += markers[i].name
        namezButton.addEventListener('click', function () {
            mymap.flyTo([markers[i].latitude, markers[i].longitude], 10,{   
                duration: 2
            });
        });
    }
  }
  prevSearchTerm = searchTerm;
}

