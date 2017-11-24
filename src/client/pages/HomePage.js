import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchJokes } from '../actions'

import SearchInput from '../components/SearchInput'
import Table from '../components/Table'

class HomePage extends Component {

  static propTypes = {
    fetchJokes: PropTypes.func,
    jokes: PropTypes.array,
  }

  componentDidMount() {
    this.props.fetchJokes()
  }

  render() {
    return (
      <div>
        <SearchInput options={['id', 'joke', 'category']} />
        <Table data={this.props.jokes} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ jokes: state.api.jokes })

export default connect(mapStateToProps, { fetchJokes })(HomePage)
