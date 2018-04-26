import React from 'react'

function FilterByState(props) {

  return (
      <div className="filter-by">
        <span className="filter-by-label">Zoom to State: </span>
        <select>
          <option value="*">All States</option>
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="ID">Idaho</option>
          <option value="OR">Oregon</option>
          <option value="NV">Nevada</option>
          <option value="WA">Washington</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
    )
}

export default FilterByState
