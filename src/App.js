import React, { Component } from 'react';
import Header from './components/Header.js';
import FilterByState from './components/FilterByState';
import ListAreas from './components/ListAreas';
import Map from './components/Map.js';
import './App.css';
import climbingAreas from './data/locations.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {climbingAreas};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <Header/>
            <FilterByState climbingAreas={this.state.climbingAreas}/>
            <ListAreas climbingAreas={this.state.climbingAreas}/>
            <main>
              <Map climbingAreas={this.state.climbingAreas} center={{lat: 40.0501211, lng: -99.0373248}} zoom={5} />
            </main>
          </div>
      </div>
    );
  }
}

export default App;