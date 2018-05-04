import React, { Component } from 'react';
import { getStateNameByCode } from '../util/Utils';
import PropTypes from 'prop-types';

class FilterByState extends Component {

  static propTypes = {
    locations: PropTypes.array,
    filterValue: PropTypes.string,
    selectedLocationId: PropTypes.string
  }

  render(){

    let {locations, onFilterByState} = this.props;

    const allStates = locations.map((location) =>
      location.state
    )
    const uniqueStates = allStates.filter((state, index, allStates) =>
      allStates.indexOf(state) === index
    )
    uniqueStates.sort()

    return (
      <div className="filter-by">
        <span className="filter-by-label">Zoom to State: </span>
        <select onChange={ (event) => onFilterByState(event.target.value)}>
          <option value=''>All States</option>
          {uniqueStates.map((state) =>
            <option key={state} value={state}>{getStateNameByCode(state)}</option>
          )}
        </select>
      </div>
    )
  }
}

export default FilterByState
