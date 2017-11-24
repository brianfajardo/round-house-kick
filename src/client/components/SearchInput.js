import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ selectOptions }) => (
  <div className="center col col-12">
    {/* Select options */}
    <select className="select center col-2 inline">
      {selectOptions.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
    {/* Search input */}
    <input
      type="search"
      placeholder="Search!"
      className="input center col-3 inline"
    />
  </div>
)

SearchInput.propTypes = {
  selectOptions: PropTypes.array,
}

export default SearchInput
