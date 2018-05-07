import React, { Component } from 'react';
//import * as RoutesAPI from '../util/RoutesAPI'

class LocationDetails extends Component {

  render() {

   const location = this.props.location

   return(
      <div className="info-window">
        <span className="area-title">{location.venue.name}</span>
      </div>
   )
 }

}

export default LocationDetails
