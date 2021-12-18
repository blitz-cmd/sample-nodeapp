const express = require('express')
const app = express()
const port = 84

app.get('/', (req, res) => {
  res.send('Hello World from Deep')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})