import React, { Component } from 'react';
import Header from './Header.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
            <Header/>
            <div class="filter-by">
              <span class="filter-by-label">Zoom to State:</span>
              <select>
                <option value="*">All States</option>
                <option value="WA">Washington</option>
                <option value="ID">Idaho</option>
                <option value="OR">Oregon</option>
                <option value="CA">California</option>
                <option value="NV">Nevada</option>
                <option value="CO">Colorado</option>
                <option value="WY">Wyoming</option>
                <option value="AZ">Arizona</option>
              </select>
            </div>
            <section class="list">
              <div class="list-title">
                Climbing Areas
              </div>
              <ul class="climbing-areas">
                <li><a href="#">Cochise Stronghold, Arizona</a></li>
                <li><a href="#">Smith Rock, Oregon</a></li>
                <li><a href="#">Joshua Tree, California</a></li>
                <li><a href="#">Yosemite Valley, California</a></li>
                <li><a href="#">Eldorado Canyon, Colorado</a></li>
                <li><a href="#">Boulder Canyon, Colorado</a></li>
                <li><a href="#">Eldorado Canyon, Colorado</a></li>
                <li><a href="#">City of Rocks, Idaho</a></li>
                <li><a href="#">The North Cascasdes, Washington</a></li>
                <li><a href="#">Mount Rainier, Washington</a></li>
                <li><a href="#">Vedauwoo, Wyoming</a></li>
                <li><a href="#">Grand Teton NP, Wyoming</a></li>
                <li><a href="#">Devil's Tower, Wyoming</a></li>

              </ul>
            </section>
            <main>
              <div id="map"/>

            </main>
          </div>
      </div>
    );
  }
}

export default App;
