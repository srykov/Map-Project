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
        { locations &&
          locations.map(location => (
            <Marker
              animation={location.venue.id === selectedLocationId? window.google.maps.Animation.BOUNCE: null}
              visible={!selectedLocationId || location.venue.id === selectedLocationId? true : false}
              key={location.venue.id}
              position={{ lat: location.venue.location.lat, lng: location.venue.location.lng }}
              title={location.venue.name}
              onClick={ () => onSelectLocation(location)}
            >
              {location.venue.id === selectedLocationId && <InfoWindow onCloseClick= { () => onSelectLocation(null)}>
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
        mapElement={ <div id="map" role="application"/> }
      />
   )
 }

}

export default Map
