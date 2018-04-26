import React, { Component } from 'react';


class ListAreas extends Component {

	render(){

		let climbingAreas = this.props.climbingAreas;
		console.log(climbingAreas);
		return (
			<section className="list">
		      <div className="list-title">
		        Climbing Areas
		      </div>
		      <ul className="climbing-areas">
		      	{ climbingAreas.map((area) => (
		      		<li key={area.id}>{area.name}</li>
		      	))}
		      </ul>
		    </section>
		)
	}
}

export default ListAreas
