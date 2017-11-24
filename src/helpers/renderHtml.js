import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../client/routes'

const renderHtml = (store, req, context) => {
  const jsx = (
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )
  const reactContent = renderToString(jsx)

  return `
  <html>
    <head>
      <title>BitCine x Chuck Norris</title>
    </head>
    <body>
      <div id="root">${reactContent}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
}

export default renderHtml
