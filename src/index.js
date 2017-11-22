import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import Setup from './client/components/Setup'

const app = express()
const PORT = process.env.PORT || 3000

app.get('*', (req, res) => res.send(renderToString(<Setup />)))

app.listen(PORT, () => console.log(`🎾 Server up on PORT:${PORT}`))
