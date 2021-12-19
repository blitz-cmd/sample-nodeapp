const express = require('express')
const app = express()
const port = 84

app.get('/', (req, res) => {
  res.send('Script working successfully!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})