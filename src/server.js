import express from 'express'
import env from 'dotenv'
import taskRoutes from './routes/index.js'

const server = express()
server.use(express.json())

server.use('/api/tasks', taskRoutes)

env.config()

const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
