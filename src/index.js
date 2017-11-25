import 'babel-polyfill'
import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import createStore from './client/store'
import { renderHtml, initComponentRequests } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

app
  .use(helmet())
  .use(express.static('public')) // bundle.js to rehydrate client
  .use(compression())

// Glob route for server-side rendering.
// StaticRouter controls what component will be served.
app.get('*', async (req, res) => {
  const routerContext = {}

  // Initializing server store.
  const store = createStore()

  // Initialize component AJAX requests, 'prefilling' Redux state.
  const requests = initComponentRequests(req, store)

  // Resolving component requests
  await Promise.all(requests)

  // Returns JSX that has been rendered to string.
  const content = renderHtml(store, req, routerContext)

  // When NotFoundPage component is rendered, pageNotFound property
  // is added to the routerContext object provided by StaticRouter.
  // See NotFoundPage (in /client/pages folder).
  if (routerContext.pageNotFound) res.status(400)

  res.status(200).send(content)
})

app.listen(PORT, () => console.log(`🎾 Server up on PORT:${PORT}`))
