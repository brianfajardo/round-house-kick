import 'babel-polyfill'
import express from 'express'
import createStore from './client/store'
import { renderHtml } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

// On second request, send clientside bundle.js (React rehydration)
app.use(express.static('public'))

// Glob route for server-side rendering.
// StaticRouter controls what component will be served.
app.get('*', (req, res) => {
  const routerContext = {}

  // Initializing server store.
  const store = createStore()

  // Returns JSX that has been rendered to string.
  const content = renderHtml(store, req, routerContext)

  // When NotFoundPage component is rendered, pageNotFound property
  // is added to the routerContext object provided by StaticRouter.
  // See NotFoundPage (in /client/pages folder).
  if (routerContext.pageNotFound) res.status(404)
  if (routerContext.url) return res.redirect(routerContext.url)

  res.status(200).send(content)
})

app.listen(PORT, () => console.log(`🎾 Server up on PORT:${PORT}`))
