import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {

  render() {

   const climbingAreas = this.props.climbingAreas
   const MapWithMarkers = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {this.props.center}
        defaultZoom = {this.props.zoom}
        ref={(ref) => {this.map = ref}}
      >
        {
          climbingAreas.map(area => (
            <Marker
              key={area.id}
              position={{ lat: area.lat, lng: area.long }}
              title={area.name}
            >
              <InfoWindow>
                <div className="info-window">
                  <span className="area-title">{area.name}</span>|<span className="state">Colorado</span>
                  <div><img src="https://cdn-files.apstatic.com/climb/1202925_sqsmall_1494040765.jpg"/></div>
                  <table className="top-routes">
                    <tbody>
                        <tr><td className="route-name">Swanson Arete</td><td>Trad</td><td>4 pitches</td><td>5.4</td></tr>
                        <tr><td className="route-name">Wind Ridge</td><td>Trad</td><td>2 pitches</td><td>5.7</td></tr>
                        <tr><td className="route-name">The Bastille Crack</td><td>Trad</td><td>4 pitches</td><td>5.4</td></tr>
                        <tr><td className="route-name">Wind Ridge</td><td>Trad</td><td>2 pitches</td><td>5.7</td></tr>
                        <tr><td className="route-name">The Bastille Crack</td><td>Trad</td><td>4 pitches</td><td>5.4</td></tr>
                    </tbody>
                  </table>
                </div>
              </InfoWindow>


            </Marker>)
          )
        }
      </GoogleMap>
   ));

   return(
      <MapWithMarkers
        containerElement={ <div id="map-container"/> }
        mapElement={ <div id="map"/> }
      />
   )
 }

}

export default Map
