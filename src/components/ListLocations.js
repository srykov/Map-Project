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

		if(!locations || locations.length === 0){
			return (
				<section className="list">
					<div className="list-title">
				        <span>Unable to load restaurant recommendations.</span>
				    </div>
			    </section>)
		} else{
			locations.sort()
			return (
				<section className="list">
			      <div className="list-title">
			        <span onClick={ () => onSelectLocation(null)}>Restaurants</span>
			      </div>
			      <ul className="locations">
			      	{ locations.map((location) => (
			      		<li className={selectedLocationId === location.id ? 'selected' : ''} key={location.venue.id}><a onClick={ () => onSelectLocation(location)}>{location.venue.name}</a></li>
			      	))}
			      </ul>
			    </section>
			)
		}
	}
}

export default ListLocations
