const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('3')
})

app.get('/health', (_req, res) => {
  console.log('Checking health check path')
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...  '
  res.send('broken version')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
