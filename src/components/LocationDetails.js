import React, { Component } from 'react';
import { getStateNameByCode, compareClimbingAreaByStateAndName } from '../util/Utils';

class LocationDetails extends Component {

  render() {

   const location = this.props.location

   return(
      <div className="info-window">
        <span className="area-title">{location.name}</span>|<span className="state">{getStateNameByCode(location.state)}</span>
        <div><img src="https://cdn-files.apstatic.com/climb/1202925_sqsmall_1494040765.jpg"/></div>
        <table className="top-routes">
          <tbody>
              <tr><td className="route-name">Swanson Arete</td><td>Trad</td><td>4 pitches</td><td>5.4</td></tr>
              <tr><td className="route-name">Wind Ridge</td><td>Trad</td><td>2 pitches</td><td>5.7</td></tr>
              <tr><td className="route-name">The Bastille Crack</td><td>Trad</td><td>4 pitches</td><td>5.4</td></tr>
          </tbody>
        </table>
      </div>
   )
 }

}

export default LocationDetails