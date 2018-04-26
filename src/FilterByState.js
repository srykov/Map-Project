import React, { Component } from 'react';
import { getStateNameByCode } from './util/Utils';

class FilterByState extends Component {

  render(){

    const climbingAreas = this.props.climbingAreas;
    const allStates = climbingAreas.map((area) =>
      area.state
    )
    const uniqueStates = allStates.filter((state, index, allStates) =>
      allStates.indexOf(state) === index
    )
    uniqueStates.sort()

    return (
      <div className="filter-by">
        <span className="filter-by-label">Zoom to State: </span>
        <select>
          <option value='*'>All States</option>
          {uniqueStates.map((state) =>
            <option key={state} value={state}>{getStateNameByCode(state)}</option>
          )}
        </select>
      </div>
    )
  }
}

export default FilterByState
