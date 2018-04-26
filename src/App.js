import React, { Component } from 'react';
import Header from './Header.js';
import FilterByState from './FilterByState';
import ListAreas from './ListAreas';
import Map from './Map.js';
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
              <Map/>
            </main>
          </div>
      </div>
    );
  }
}

export default App;