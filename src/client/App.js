import React from 'react'
import { renderRoutes } from 'react-router-config'

// App will be the root component.
// renderRoutes(props.route.routes) renders children
// components that will be found in the routes file.

const App = props => (
  <div>
    <h1>Chuck FREAKING Norris</h1>
    {renderRoutes(props.route.routes)}
  </div>
)

export default App
