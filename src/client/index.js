import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import store from './store'
import routes from './routes'

// Redux state passed from the server to the browser
// attached to the global object.

const jsx = (
  <Provider store={store(window.INITIAL_REDUX_STATE)}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(jsx, document.getElementById('root'))
