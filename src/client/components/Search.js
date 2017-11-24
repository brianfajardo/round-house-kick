import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  selectOptions: PropTypes.array,
  searchInput: PropTypes.string,
  searchOption: PropTypes.string,
  handleSearchInput: PropTypes.func,
  handleSearchOptions: PropTypes.func,
}

const Search = ({
  selectOptions,
  searchInput,
  searchOption,
  handleSearchInput,
  handleSearchOptions,
}) => (
  <div className="center col col-12">
    {/* Select options */}
    <select
      onChange={handleSearchOptions}
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
      value={searchInput}
      onChange={handleSearchInput}
      placeholder={`Searching by ${searchOption}`}
      className="input center col-3 inline"
    />
  </div>
)

Search.propTypes = propTypes

export default Search
