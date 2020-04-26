const express = require('express')
var path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + 'public/index.html'))
})

app.get('/list', (req, res) =>{
    res.send({
      
    })
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))