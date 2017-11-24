import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ options }) => (
  <div className="center">
    <select className="inline">
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
    <input
      type="search"
      placeholder="Search"
      className="input center col-3 inline"
    />
  </div>
)

SearchInput.propTypes = {
  options: PropTypes.array,
}

export default SearchInput
