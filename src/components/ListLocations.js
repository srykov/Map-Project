import React, { Component } from 'react';
import { getStateNameByCode, compareClimbingAreaByStateAndName } from '../util/Utils';
import PropTypes from 'prop-types';

class ListLocations extends Component {

	static propTypes = {
		climbingAreas: PropTypes.array,
		filterValue: PropTypes.string,
		selectedLocationId: PropTypes.string
	}

	render(){

		let {locations, onSelectLocation, selectedLocationId} = this.props;
		locations.sort(compareClimbingAreaByStateAndName)
		return (
			<section className="list">
		      <div className="list-title">
		        <span onClick={ () => onSelectLocation(null)}>Climbing Areas</span>
		      </div>
		      <ul className="climbing-areas">
		      	{ locations.map((location) => (
		      		<li className={selectedLocationId === location.id ? 'selected' : ''} onClick={ () => onSelectLocation(location)} key={location.id}>{location.name}, {getStateNameByCode(location.state)}</li>
		      	))}
		      </ul>
		    </section>
		)
	}
}

export default ListLocations
