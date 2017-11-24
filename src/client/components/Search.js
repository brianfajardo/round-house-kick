import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
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
    e.persist()
    this.setState(() => ({ searchInput: e.target.value }))
  }

  handleSearchOptions(e) {
    e.persist()
    this.setState(() => ({ searchOption: e.target.value }))
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

export default Search
