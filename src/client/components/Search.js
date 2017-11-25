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

    this.state = {
      searchInput: '',
      searchOption: 'id',
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSearchOptions = this.handleSearchOptions.bind(this)
  }

  handleSearchInput(e) {
    this.props.setSearchQuery(e.target.value)
    this.setState({ searchInput: e.target.value })
  }

  handleSearchOptions(e) {
    this.props.setSearchFilter(e.target.value)
    this.setState({ searchOption: e.target.value })
  }

  render() {
    return (
      <div className="center col col-12">
        {/* Select options */}
        <select
          onChange={this.handleSearchOptions}
          className="select center col-2 inline"
        >
          {this.props.options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Search input */}
        <input
          type="search"
          value={this.state.searchInput}
          onChange={this.handleSearchInput}
          placeholder={`Searching by ${this.state.searchOption}`}
          className="input center col-3 inline"
        />
      </div>
    )
  }
}

export default connect(null, { setSearchQuery, setSearchFilter })(Search)
