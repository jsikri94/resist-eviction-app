const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 8080;

app.use('/', express.static(__dirname + '/../build'));


app.post('/servedate', function (req, res) {

});

app.listen(process.env.PORT || port,  () => console.log(`Listening on port ${port}`));