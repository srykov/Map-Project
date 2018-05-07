import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListLocations extends Component {

	static propTypes = {
		locations: PropTypes.array,
		filterValue: PropTypes.string,
		selectedLocationId: PropTypes.string
	}

	render(){

		let {locations, onSelectLocation, selectedLocationId} = this.props;
		locations.sort()
		return (
			<section className="list">
		      <div className="list-title">
		        <span onClick={ () => onSelectLocation(null)}>Food & Drink in Toronto</span>
		      </div>
		      <ul className="locations">
		      	{ locations.map((location) => (
		      		<li className={selectedLocationId === location.id ? 'selected' : ''} onClick={ () => onSelectLocation(location)} key={location.venue.id}>{location.venue.name}</li>
		      	))}
		      </ul>
		    </section>
		)
	}
}

export default ListLocations
