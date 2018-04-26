let map;
let markers = [];

function initMap() {
  console.log(document.getElementById('map'));
	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: 40.0501211, lng: -99.0373248},
  		zoom: 3,
  		mapTypeControl: false
	});

  var infoWindow = new google.maps.InfoWindow();
  // Style the markers a bit. This will be our listing marker icon.
  var defaultIcon = makeMarkerIcon('0091ff');

  // Create a "highlighted location" marker color for when the user
  // mouses over the marker.
  var highlightedIcon = makeMarkerIcon('ff24aa');
  var bounds = new google.maps.LatLngBounds();
  climbingAreas.forEach(function(area, index){
    let marker = createMarkerForClimbingArea(area, index, infoWindow, defaultIcon, highlightedIcon);
    marker.setMap(map);
    bounds.extend(marker.position);
  });
  map.fitBounds(bounds);

};

// Create a marker per climbingArea, and put into markers array.
function createMarkerForClimbingArea(climbingArea, id, infowindow, defaultIcon, highlightedIcon){
  var marker = new google.maps.Marker({
    position: {lat: climbingArea.lat, lng: climbingArea.long},
    title: climbingArea.name,
    animation: google.maps.Animation.DROP,
    icon: defaultIcon,
    id: id
  });

  // Push the marker to our array of markers.
  markers.push(marker);

  // Create an onclick event to open an infowindow at each marker.
  marker.addListener('click', function() {
    populateInfoWindow(this, infowindow, climbingArea);
  });
  // Two event listeners - one for mouseover, one for mouseout,
  // to change the colors back and forth.
  marker.addListener('mouseover', function() {
    this.setIcon(highlightedIcon);
  });
  marker.addListener('mouseout', function() {
    this.setIcon(defaultIcon);
  });

  return marker;
};

function populateInfoWindow(marker, infowindow, climbingArea) {
// Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent(`<div class="info-window"><span class="area-title">  ${climbingArea.name} </span>|<span class="state">${climbingArea.state}</span>
        <div><img src="https://cdn-files.apstatic.com/climb/1202925_sqsmall_1494040765.jpg"/></div>
        <table class="top-routes">
          <tr><td class="route-name"><a>Swanson Arete</a></td><td>Trad</td><td>4 pitches</td><td>5.4</td></tr>
          <tr><td class="route-name">Wind Ridge</td><td>Trad</td><td>2 pitches</td><td>5.7</td></tr>
          <tr><td class="route-name">The Bastille Crack</td><td>Trad</td><td>4 pitches</td><td>5.4</td></tr>
        </table>

      </div>`);
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
    });
  }
};

// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
  new google.maps.Size(21, 34),
  new google.maps.Point(0, 0),
  new google.maps.Point(10, 34),
  new google.maps.Size(21,34));
  return markerImage;
}
