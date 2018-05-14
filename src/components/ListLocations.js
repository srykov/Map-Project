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

		//if we don't have any location information, show "Loading...""
		//message rather than a list
		if(!locations || locations.length === 0){
			return (
				<section className="list">
					<div className="list-title">
				        <span>Loading restaurant recommendations...</span>
				    </div>
			    </section>)
		}
		//we have locations, so show a list of all locations
		else {
			locations.sort()
			return (
				<section className="list" role="menu">
			      <div className="list-title">
			        <span onClick={ () => onSelectLocation(null)}>Restaurants</span>
			      </div>
			      <ul className="locations">
			      	{ locations.map((location) => (
			      		<li tabIndex="0" className={selectedLocationId === location.id ? 'selected' : ''} key={location.venue.id}><a onClick={ () => onSelectLocation(location)}>{location.venue.name}</a></li>
			      	))}
			      </ul>
			    </section>
			)
		}
	}
}

export default ListLocations
