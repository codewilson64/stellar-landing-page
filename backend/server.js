import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// Routes
import subscribeRoutes from './router/subscribe.js'

app.use('/api', subscribeRoutes)

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})