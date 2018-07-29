// app.js
const express = require('express');
// initialize our express app
const app = express();

//const bodyParser = require('body-parser');
let port = 1234;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


function insertCustomer(dbo, customer, done) {
    dbo.collection("customers").insertOne(customer, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        done();
    });    
}

function connectMongo(done) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");

        done(db);
    });
}

app.use(function (req, res, next) {
    console.log('PAssaggio per: ' + req.url);
    next();
})

app.use(function (req, res, next) {
    console.log('PAssaggio 2');
    next();
})

app.get('/test', function(req, res) {
    console.log('Test Entry point called');
    res.json({ response: 'success'});
});

app.get('/save', function(req, res) {
    console.log('Saving to DATABASE');

    // Code to Save to database
    connectMongo(function done(db) {
        var dbo = db.db("mydb");
        var customer = {
            name: "Company Inc",
            address: "Highway 37"
        };
        insertCustomer(dbo, customer, function() {
            db.close();
            res.json({ response: 'success'});
        })
    })
});

// Servi una pagina web con una campo di input
let html = `<h1>Welcome</h1>
<p>Insert number: 
    <input type="text"></input>
    <a href="http://localhost:1234/save">SAVE</a>
</p>`
app.get('/insert-value', function(req, res) {
    console.log('Test Entry point called 2');
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write(html);
    res.end();
});

// Inizia il server sulla porta specificata
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});