import express from 'express'
import createStore from './client/store'
import { renderHtml } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  const routerContext = {}

  // Initializing server store.
  const store = createStore()

  // Returns JSX that has been rendered to string.
  const content = renderHtml(store, req, routerContext)

  res.status(200).send(content)
})

app.listen(PORT, () => console.log(`🎾 Server up on PORT:${PORT}`))
