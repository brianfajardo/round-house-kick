import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setSearchFilter, setSearchQuery } from '../actions'

class Search extends Component {

  static propTypes = {
    options: PropTypes.array,
    setSearchFilter: PropTypes.func,
    setSearchQuery: PropTypes.func,
  }

  constructor() {
    super()
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSearchOptions = this.handleSearchOptions.bind(this)
  }

  handleSearchInput(e) {
    this.props.setSearchQuery(e.target.value)
  }

  handleSearchOptions(e) {
    this.props.setSearchFilter(e.target.value)
  }

  render() {
    const { options, searchQuery, searchFilter } = this.props
    return (
      <div className="center col col-12">
        {/* Select options */}
        <select
          value={searchFilter}
          onChange={this.handleSearchOptions}
          className="select center col-2 inline"
        >
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Search input */}
        <input
          type="search"
          value={searchQuery}
          onChange={this.handleSearchInput}
          placeholder={`Searching by ${searchFilter}`}
          className="input center col-3 inline"
        />
      </div>
    )
  }
}

const mapStateToProps = ({ filters }) => ({
  searchFilter: filters.searchFilter,
  searchQuery: filters.searchQuery,
})

export default connect(mapStateToProps, { setSearchQuery, setSearchFilter })(
  Search
)
