import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import Setup from './client/components/Setup'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  const content = renderToString(<Setup />)
  const html = `
  <html>
    <head>
      <title>Hi BitCine</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `

  res.status(200).send(html)
})

app.listen(PORT, () => console.log(`🎾 Server up on PORT:${PORT}`))
