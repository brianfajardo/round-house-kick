import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createEntry } from '../actions'

class CreateEntry extends Component {

  static propTypes = {
    createEntry: PropTypes.func,
  }

  constructor() {
    super()

    this.state = {
      entryInput: '',
      entryCategories: '',
    }

    this.handleEntryInput = this.handleEntryInput.bind(this)
    this.handleEntryCategories = this.handleEntryCategories.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleEntryInput(e) {
    this.setState({ entryInput: e.target.value })
  }

  handleEntryCategories(e) {
    this.setState({ entryCategories: e.target.value })
  }

  handleFormSubmit(e) {
    const { entryInput, entryCategories } = this.state
    e.preventDefault()
    // Check that the input contains text.
    if (entryInput.trim()) {
      this.props.createEntry(entryInput, entryCategories)
      // Clear values after submitting entry!
      this.setState({ entryInput: '', entryCategories: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="center col col-12">
        <input
          type="text"
          value={this.state.entryInput}
          onChange={this.handleEntryInput}
          placeholder="Got a funny one?"
          className="input center col-5 inline"
        />
        <input
          type="text"
          value={this.state.entryCategories}
          onChange={this.handleEntryCategories}
          placeholder="Add categories"
          className="input center col-3 inline"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )
  }
}

export default connect(null, { createEntry })(CreateEntry)
