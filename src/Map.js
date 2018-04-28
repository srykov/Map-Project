import React, { Component } from 'react';

class Map extends Component {

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7608, lng: -111.8910},
      zoom: 5,
      mapTypeControl: false
    });

    const climbingAreas = this.props.climbingAreas
    const bounds = new window.google.maps.LatLngBounds();
    // Create a marker per climbingArea
    climbingAreas.forEach(function(area, index) {
      var marker = new window.google.maps.Marker({
        position: {lat: area.lat, lng: area.long},
        title: area.name,
        id: area.id
      });
      marker.setMap(map)
      bounds.extend(marker.position);
    })
    map.fitBounds(bounds);
  }

  render() {
    return (
     <div id="map"/>
    )
  }
}

export default Map
