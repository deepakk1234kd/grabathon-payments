const express = require('express')

const app = express()

app.use(express.json())

app.post('/transaction', (req, res) => {
    const response = req.body
    console.log(response)
    res.send(response)
})

app.listen(port=3000, () => {
    console.log('Server is up on port', port)
})