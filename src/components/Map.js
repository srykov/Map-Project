import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import ClimbingAreaContent from './ClimbingAreaContent';

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
                <ClimbingAreaContent area={area}/>
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
