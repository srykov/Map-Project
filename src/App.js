import React, { Component } from 'react';
import Header from './components/Header.js';
import { getCenterOfState } from './util/Utils';
import FilterByState from './components/FilterByState';
import ListLocations from './components/ListLocations';
import Map from './components/Map.js';
import './App.css';
import climbingAreas from './data/locations.json';

class App extends Component {

  constructor(props){
    super(props);

    this.allLocations = climbingAreas
    this.defaultCenter = {lat: 40.758701, lng: -111.876183}
    this.wideViewZoom = 5
    this.stateViewZoom = 6
    this.locationViewZoom = 8

    this.state = {
      selectedLocationId: '',
      filterValue: '',
      zoom: this.wideViewZoom,
      center: this.defaultCenter
    }
  }

  filterByState = ((stateCode) => {

    let center = getCenterOfState(stateCode) ? getCenterOfState(stateCode) : this.defaultCenter
    let zoom = stateCode ? this.stateViewZoom : this.wideViewZoom
    this.setState({
      filterValue: stateCode,
      selectedLocationId: '',
      zoom: zoom,
      center: center
    })
  })

  selectLocation = ((location) => {
    let zoom = location ? this.locationViewZoom : this.wideViewZoom

    this.setState({
      selectedLocationId: location.id,
      center: {lat: location.lat, lng: location.long},
      zoom: zoom
    })
  })

  render() {
    let {selectedLocationId, filterValue, zoom, center} = this.state

    let filteredLocations = this.allLocations
    if(filterValue){
      filteredLocations = this.allLocations.filter ((location) => {
        return location.state === filterValue
      })
    }

    return (
      <div className="App">
        <div className="container">
            <Header/>
            <FilterByState onFilterByState={this.filterByState} locations={this.allLocations} filterValue={this.state.filterValue} selectedLocationId={selectedLocationId}/>
            <ListLocations onSelectLocation={this.selectLocation} locations={filteredLocations} filterValue={this.state.filterValue} selectedLocationId={selectedLocationId}/>
            <main>
              <Map locations={filteredLocations} center={center} zoom={zoom} selectedLocationId={selectedLocationId}/>
            </main>
          </div>
      </div>
    );
  }
}

export default App;