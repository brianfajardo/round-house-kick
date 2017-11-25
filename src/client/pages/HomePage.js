import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchJokes } from '../actions'

import Search from '../components/Search'
import CreateEntry from '../components/CreateEntry'
import Table from '../components/Table'

class HomePage extends Component {

  static propTypes = {
    data: PropTypes.array,
    fetchJokes: PropTypes.func,
  }

  componentDidMount() {
    if (this.props.data.length) return
    this.props.fetchJokes()
  }

  render() {
    console.log('FILTERS:', this.props.filters)
    return (
      <div>
        <Search options={['id', 'joke', 'category']} />
        <CreateEntry />
        <Table data={this.props.data} />
      </div>
    )
  }
}

const mapStateToProps = ({ data, filters }) => ({ data, filters })

export default connect(mapStateToProps, { fetchJokes })(HomePage)
