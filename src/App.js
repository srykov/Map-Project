import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import FilterByCategory from './components/FilterByCategory';
import ListLocations from './components/ListLocations';
import Map from './components/Map.js';
import './App.css';
import * as LocationAPI from './util/LocationAPI';

class App extends Component {

  constructor(props){
    super(props);
    this.defaultCenter = {lat: LocationAPI.torontoLat, lng: LocationAPI.torontoLng}
    this.defaultZoom = 14

    this.state = {
      allLocations: [],
      selectedLocationId: '',
      filterValue: '',
      center: this.defaultCenter
    }
  }

  componentDidMount(){
    LocationAPI.getLocations().then((locations) => {
      this.setState({
        allLocations:locations
      })
    })
  }


  filterByType = ((categoryId) => {
    this.setState({
      filterValue: categoryId,
      selectedLocationId: ''
    })
  })

  selectLocation = ((location) => {
    this.setState({
      selectedLocationId: location ? location.venue.id : '',
      center: location? {lat: location.venue.location.lat, lng: location.venue.location.lng} : this.defaultCenter
    })
  })

  render() {
    let {selectedLocationId, filterValue, center} = this.state

    let filteredLocations = this.state.allLocations
    if(filterValue){
      filteredLocations = this.state.allLocations.filter ((location) => {
        return location.venue.categories[0].id === filterValue
      })
    }

    return (
      <div className="App">
        <div className="container">
            <Header/>
            <FilterByCategory onFilterByCategory={this.filterByType} locations={this.state.allLocations} filterValue={this.state.filterValue} selectedLocationId={selectedLocationId}/>
            <ListLocations onSelectLocation={this.selectLocation} locations={filteredLocations} filterValue={this.state.filterValue} selectedLocationId={selectedLocationId}/>
            <main role="main">
              <Map onSelectLocation={this.selectLocation} locations={filteredLocations} center={center} zoom={this.defaultZoom} selectedLocationId={selectedLocationId}/>
            </main>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;