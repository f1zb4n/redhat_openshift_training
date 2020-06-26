const express = require('express');
app = express();

var response;

app.get('/', function(req, res) {
    res.send('This is version 2 of the app.\n');
});

app.listen(8080, function() {
    console.log('Server listening on port 8080...');
});