import React, { Component } from 'react';
import Header from './Header.js'
import FilterByState from './FilterByState'
import ListAreas from './ListAreas'
import Map from './Map.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
            <Header/>
            <FilterByState/>
            <ListAreas/>
            <main>
              <Map/>
            </main>
          </div>
      </div>
    );
  }
}

export default App;
