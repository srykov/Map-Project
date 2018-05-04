import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';

class Map extends Component {

  static propTypes = {
    locations: PropTypes.array,
    center: PropTypes.object,
    zoom: PropTypes.number
  }

  render() {

   const locations = this.props.locations
   const MapWithMarkers = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {this.props.center}
        defaultZoom = {this.props.zoom}
        ref={(ref) => {this.map = ref}}
      >
        {
          locations.map(location => (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.long }}
              title={location.name}
            >
              {props.isOpen && <InfoWindow>
                <LocationDetails location={location}/>
              </InfoWindow>}


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
