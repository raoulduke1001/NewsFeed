var express = require('express')
var app = express()
var port = 3000

app.get('/hello', function (req, res) {
    res.send('hello')
})

app.use(express.static('dist'))

app.listen(port, function () {
    console.log('Example app listening on port http://localhost:' + port + '/')
})