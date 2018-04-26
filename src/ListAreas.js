import React, { Component } from 'react';
import { getStateNameByCode, compareClimbingAreaByStateAndName } from './util/Utils';

class ListAreas extends Component {

	render(){

		let climbingAreas = this.props.climbingAreas;
		climbingAreas.sort(compareClimbingAreaByStateAndName)
		return (
			<section className="list">
		      <div className="list-title">
		        Climbing Areas
		      </div>
		      <ul className="climbing-areas">
		      	{ climbingAreas.map((area) => (
		      		<li key={area.id}>{area.name}, {getStateNameByCode(area.state)}</li>
		      	))}
		      </ul>
		    </section>
		)
	}
}

export default ListAreas
