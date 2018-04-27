import React, { Component } from 'react';

class Map extends Component {

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7608, lng: -111.8910},
      zoom: 5,
      mapTypeControl: false
    });
  }

  render() {
    return (
     <div id="map"/>
    )
  }
}

export default Map
