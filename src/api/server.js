const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Oi')
})



app.listen(9000, () => {
    console.log('Running at localhost::9000')
})