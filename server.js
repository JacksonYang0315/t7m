const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/', function (req, res) {
    res.sendFile(__dirname +'/index_未登入.html');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});