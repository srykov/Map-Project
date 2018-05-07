import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterByCategory extends Component {

  static propTypes = {
    locations: PropTypes.array,
    filterValue: PropTypes.string,
    selectedLocationId: PropTypes.string
  }

  render(){

    let {locations, onFilterByCategory} = this.props;

    const allCategories = locations.map((location) =>
      location.venue.categories[0]
    )

    const uniqueCategories = allCategories.filter((object, position, array) => {
      return array.map(category => category['id']).indexOf(object['id']) === position
    });

    return (
      <div className="filter-by">
        <span className="filter-by-label">Filter by Restaurant Type: </span>
        <select onChange={ (event) => onFilterByCategory(event.target.value)}>
          <option value=''>All Restaurant Categories</option>
          {uniqueCategories.map((category) =>
            <option key={category.id} value={category.id}>{category.shortName}</option>
          )}
        </select>
      </div>
    )
  }
}

export default FilterByCategory
