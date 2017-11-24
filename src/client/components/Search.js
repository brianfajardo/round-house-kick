import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ selectOptions, handleSelectOption, searchOption }) => (
  <div className="center col col-12">
    {/* Select options */}
    <select
      onChange={handleSelectOption}
      className="select center col-2 inline"
    >
      {selectOptions.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
    {/* Search input */}
    <input
      type="search"
      placeholder={`Searching by ${searchOption}`}
      className="input center col-3 inline"
    />
  </div>
)

Search.propTypes = {
  selectOptions: PropTypes.array,
  handleSelectOption: PropTypes.func,
  searchOption: PropTypes.string,
}

export default Search
