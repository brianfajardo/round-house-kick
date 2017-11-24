import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../client/routes'

const renderHtml = (store, req, context) => {

  // JSX to be passed to renderToString method.
  const jsx = (
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  // Convert JSX to string to be injected into the HTML template below.
  const reactContent = renderToString(jsx)

  return `
  <html>
    <head>
      <title>BitCine x Chuck Norris</title>
      <link href="https://unpkg.com/ace-css/css/ace.min.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${reactContent}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
}

export default renderHtml
