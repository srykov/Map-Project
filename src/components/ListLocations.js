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

		let locations = this.props.locations;
		locations.sort(compareClimbingAreaByStateAndName)
		return (
			<section className="list">
		      <div className="list-title">
		        Climbing Areas
		      </div>
		      <ul className="climbing-areas">
		      	{ locations.map((area) => (
		      		<li key={area.id}>{area.name}, {getStateNameByCode(area.state)}</li>
		      	))}
		      </ul>
		    </section>
		)
	}
}

export default ListLocations
