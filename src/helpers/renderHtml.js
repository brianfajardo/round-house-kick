import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'

const renderHtml = () => {
  const reactContent = renderToString(<App />)

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
