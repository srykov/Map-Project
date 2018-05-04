import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';

class Map extends Component {

  static propTypes = {
    locations: PropTypes.array,
    center: PropTypes.object,
    zoom: PropTypes.number,
    selectedLocationId: PropTypes.string
  }

  render() {

   const {locations, selectedLocationId, onSelectLocation} = this.props
   const MapWithMarkers = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {this.props.center}
        defaultZoom = {this.props.zoom}
        ref={(ref) => {this.map = ref}}
      >
        {
          locations.map(location => (
            <Marker
              visible={!selectedLocationId || location.id === selectedLocationId? true : false}
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.name}
              onClick={ () => onSelectLocation(location)}
            >
              {location.id === selectedLocationId && <InfoWindow onCloseClick= { () => onSelectLocation(null)}>
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
