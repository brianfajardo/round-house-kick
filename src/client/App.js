import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => (
  <div>
    <h1 className="center">Chuck FREAKING Norris</h1>
    {/* renderRoutes(props.route.routes) renders children
    components that will be found in the routes file. */}
    {renderRoutes(route.routes)}
  </div>
)

App.propTypes = {
  route: PropTypes.object,
}

export default App
