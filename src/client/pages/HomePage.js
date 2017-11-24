import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchJokes } from '../actions'

import Search from '../components/Search'
import CreateEntry from '../components/CreateEntry'
import Table from '../components/Table'

class HomePage extends Component {

  static propTypes = {
    fetchJokes: PropTypes.func,
    jokes: PropTypes.array,
  }

  constructor() {
    super()
    this.state = {
      searchOption: 'id',
      entryInput: '',
    }
    this.handleSelectOption = this.handleSelectOption.bind(this)
    this.handleEntryInput = this.handleEntryInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.jokes.length) return
    this.props.fetchJokes()
  }

  handleSelectOption(e) {
    // React events are 'synthetic'. After an event callback is invoked,
    // the SyntheticEvent object is nullified and all properties are wiped.
    // SyntheticEvent (e) cannot be used asynchronously because the event will
    // no longer exist after the event callback has been invoked.
    // event.persist() to the rescue :)
    e.persist()
    this.setState(() => ({ searchOption: e.target.value }))
  }

  handleEntryInput(e) {
    e.persist()
    this.setState(() => ({ entryInput: e.target.value }))
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.setState(() => ({ entryInput: '' }))
  }

  render() {
    const { searchOption, entryInput } = this.state
    return (
      <div>
        <Search
          selectOptions={['id', 'joke', 'category']}
          searchOption={searchOption}
          handleSelectOption={this.handleSelectOption}
        />
        <CreateEntry
          inputValue={entryInput}
          handleEntryInput={this.handleEntryInput}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table data={this.props.jokes} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ jokes: state.api.jokes })

export default connect(mapStateToProps, { fetchJokes })(HomePage)
