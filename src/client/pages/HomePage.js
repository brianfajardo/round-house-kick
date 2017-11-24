import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'

import Search from '../components/Search'
import CreateEntry from '../components/CreateEntry'
import Table from '../components/Table'

class HomePage extends Component {

  static propTypes = {
    jokes: PropTypes.arrayOf(PropTypes.shape({})),
    fetchJokes: PropTypes.func,
    createEntry: PropTypes.func,
  }

  constructor() {
    super()
    this.state = {
      searchInput: '',
      searchOption: 'id',
      entryInput: '',
      entryCategories: '',
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSearchOptions = this.handleSearchOptions.bind(this)
    this.handleEntryInput = this.handleEntryInput.bind(this)
    this.handleEntryCategories = this.handleEntryCategories.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.jokes.length) return
    this.props.fetchJokes()
  }

  handleSearchInput(e) {
    // React events are 'synthetic'. After an event callback is invoked,
    // the SyntheticEvent object is nullified and all properties are wiped.
    // SyntheticEvent (e) cannot be used asynchronously because the event
    // will no longer exist after the event callback has been invoked.
    // event.persist() to the rescue :)
    e.persist()
    this.setState(() => ({ searchInput: e.target.value }))
  }

  handleSearchOptions(e) {
    e.persist()
    this.setState(() => ({ searchOption: e.target.value }))
  }

  handleEntryInput(e) {
    e.persist()
    this.setState(() => ({ entryInput: e.target.value }))
  }

  handleEntryCategories(e) {
    e.persist()
    this.setState(() => ({ entryCategories: e.target.value }))
  }

  handleFormSubmit(e) {
    const { entryInput, entryCategories } = this.state
    e.preventDefault()
    // Check that the input contains text.
    if (entryInput.trim()) {
      this.props.createEntry(entryInput, entryCategories)
      this.setState(() => ({ entryInput: '', entryCategories: '' }))
    }
  }

  render() {
    const {
      searchInput,
      searchOption,
      entryInput,
      entryCategories,
    } = this.state
    return (
      <div>
        <Search
          selectOptions={['id', 'joke', 'category']}
          searchInput={searchInput}
          searchOption={searchOption}
          handleSearchInput={this.handleSearchInput}
          handleSearchOptions={this.handleSearchOptions}
        />
        <CreateEntry
          entryInput={entryInput}
          entryCategories={entryCategories}
          handleEntryInput={this.handleEntryInput}
          handleEntryCategories={this.handleEntryCategories}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table data={this.props.jokes} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ jokes: state.api.jokes })

export default connect(mapStateToProps, actions)(HomePage)
