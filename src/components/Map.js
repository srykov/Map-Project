import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';


class Map extends Component {

  componentDidMount() {
      // Connect the initMap() function within this class to the global window context,
      // so Google Maps can invoke it
      window.handleGoogleMapLoadingError = this.handleGoogleMapLoadingError
      window.initMap = this.initMap
      loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDc7zly2Sx0Y660slJalhNkDnbgNoCSh1A&v=3&callback=initMap')
    }


  static propTypes = {
    locations: PropTypes.array,
    center: PropTypes.object,
    zoom: PropTypes.number,
    selectedLocationId: PropTypes.string
  }

  initMap(){
    window.googleLoaded = true
  }


  render() {
    if(window.googleLoaded === undefined){
        return (
          <div id="map-container">
            <div className="map-error"><i className="fas fa-3x fa-exclamation-circle"></i></div>
            <div className="map-error">Ooops! We were not able to load the map. </div>
          </div>
          )
    } else {
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
        ))
        return(
           <MapWithMarkers
              containerElement={ <div id="map-container"/> }
              mapElement={ <div id="map" role="application"/> }
            />
         )
    }
  }

}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default Map
