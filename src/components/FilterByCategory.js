import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterByCategory extends Component {

  static propTypes = {
    locations: PropTypes.array,
    filterValue: PropTypes.string,
    selectedLocationId: PropTypes.string
  }

  render(){

    let {locations, onFilterByCategory} = this.props

    //if there are no locations, don't try to build the filter-by select box
    if(!locations || locations.length === 0){
      return (
        <div className="filter-by">
        </div>
      )
    }
    //we have locations, to build a select box that allows the user to filter by restaurant category
    else{
      const allCategories = locations.map((location) =>
        location.venue.categories[0]
      )

      /* put each category name in the select box only once, even if it is present for multiple
       * restaurants
       */
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
}

export default FilterByCategory
