import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchJokes } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchJokes()
  }

  render() {
    console.log(this.props.api)
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

const mapStateToProps = ({ api }) => ({ api })

export default connect(mapStateToProps, { fetchJokes })(App)
