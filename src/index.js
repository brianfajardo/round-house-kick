import express from 'express'
import { renderHtml } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  const html = renderHtml()

  res.status(200).send(html)
})

app.listen(PORT, () => console.log(`🎾 Server up on PORT:${PORT}`))
