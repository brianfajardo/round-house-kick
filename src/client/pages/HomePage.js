import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'

import Search from '../components/Search'
import CreateEntry from '../components/CreateEntry'
import Table from '../components/Table'

class HomePage extends Component {

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        joke: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    fetchJokes: PropTypes.func,
    createEntry: PropTypes.func,
  }

  constructor() {
    super()
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.data.length) return
    this.props.fetchJokes()
  }

  onFormSubmit(entry, categories) {
    this.props.createEntry(entry, categories)
  }

  render() {
    return (
      <div>
        <Search options={['id', 'joke', 'category']} />
        <CreateEntry onFormSubmit={this.onFormSubmit} />
        <Table data={this.props.data} />
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => ({ data })

export default connect(mapStateToProps, actions)(HomePage)
