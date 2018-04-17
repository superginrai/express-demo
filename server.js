const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', function (req, res) {
    res.send('Hello Tacos');
})

app.get('/hey', function (req, res){
    res.send('Howdy Tacos');
})

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`)
});