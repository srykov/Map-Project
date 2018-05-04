import React, { Component } from 'react';
import Header from './components/Header.js';
import FilterByState from './components/FilterByState';
import ListLocations from './components/ListLocations';
import Map from './components/Map.js';
import './App.css';
import climbingAreas from './data/locations.json';

class App extends Component {

  constructor(props){
    super(props);

    this.allLocations = climbingAreas
    this.defaultCenter = {lat: 40.0501211, lng: -99.0373248}
    this.defaultZoom = 5

    this.state = {
      selectedLocationId: '',
      filterValue: ''
    }
  }

  selectLocation = ((locationId) => {
    this.setState({selectedLocationId: locationId})
  })

  render() {
    let filteredLocations = this.allLocations
    let selectedLocationId = this.state.selectedLocationId

    if(selectedLocationId){
      let selectedLocation = this.allLocations.find ((location) => {
        return location.id === selectedLocationId
      })
      filteredLocations = [selectedLocation]
    }

    return (
      <div className="App">
        <div className="container">
            <Header/>
            <FilterByState locations={this.allLocations} filterValue={this.state.filterValue} selectedLocationId={this.state.selectedLocationId}/>
            <ListLocations onSelectLocation={this.selectLocation} locations={this.allLocations} filterValue={this.state.filterValue} selectedLocationId={this.state.selectedLocationId}/>
            <main>
              <Map locations={filteredLocations} center={this.defaultCenter} zoom={this.defaultZoom} />
            </main>
          </div>
      </div>
    );
  }
}

export default App;