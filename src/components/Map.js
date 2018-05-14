import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';

class Map extends Component {

  static propTypes = {
    locations: PropTypes.array,
    center: PropTypes.object,
    zoom: PropTypes.number,
    selectedLocationId: PropTypes.string
  }

  state = {
    error: true
  }

  init(){
    this.setState({error:false})
  }

  render() {

   const {locations, selectedLocationId, onSelectLocation} = this.props
   const MapWithMarkers = withScriptjs (

      withGoogleMap(props => (
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
      )
    )
  )

  if(this.state.error){
    return (
      <div id="map-container">
        <div className="map-error"><i class="fas fa-exclamation-triangle fa-3x"></i></div>
        <div className="map-error">Ooops! We had a problem loading the map</div>
      </div>
      )
  } else{

     return(
        <MapWithMarkers
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDc7zly2Sx0Y660slJalhNkDnbgNoCSh1A&v=3&callback=init"
          loadingElement={ <div id="map" role="application"/> }
          containerElement={ <div id="map-container"/> }
          mapElement={ <div id="map" role="application"/> }
        />
     )
  }}

}

export default Map
