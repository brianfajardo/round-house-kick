import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchJokes } from './actions'

class App extends Component {

  componentDidMount() {
    console.log('CDM')
    this.props.fetchJokes()
  }

  render() {
    return (
      <div>
        <h1>Chuck FREAKING Norris</h1>
        {/* renderRoutes(props.route.routes) renders children
        components that will be found in the routes file. */}
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

App.propTypes = {
  fetchJokes: PropTypes.func,
  route: PropTypes.object,
}

export default connect(null, { fetchJokes })(App)
