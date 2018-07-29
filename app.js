// app.js
const express = require('express');
// initialize our express app
const app = express();

//const bodyParser = require('body-parser');
let port = 1234;

app.get('/test', function(req, res) {
    console.log('Test Entry point called');
    res.json({ response: 'success'});
});

app.get('/test2', function(req, res) {
    console.log('Test Entry point called 2');
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write('<p>Ciao bello</p>');  
    res.end(); 
});

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});