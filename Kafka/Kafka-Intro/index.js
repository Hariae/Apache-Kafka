var express = require('express');
var MongoClient = require('./DatabaseConnection');
var Model = require('./DatabaseConnection');
var PropertyDetails = require('./DatabaseConnection');

var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');

//kafka
var kafka = require('./kafka/client');


var bcrypt = require('bcrypt-nodejs');

//set up cors
//app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//set up session variable

app.use(session({
    secret: 'cmpe273-homeaway-app',
    resave: false,
    saveUninitialized: false,
    duration: 60 * 60 * 100,
    activeDuration: 5 * 60 * 100
}));

app.use(bodyParser.json());

//Allow acceess control headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//Login validation
app.post('/login', function (req, res) {

    console.log('Inside login POST');
    console.log('Request Body: ', req.body);

    //Kafka

    kafka.make_request('login', req.body, function(err, results){
        console.log('in result');
        console.log(res);

        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            });

        }
        else{
                console.log("Inside else");
                
                // res.writeHead(200, {
                //     'Content-type': 'text/plain'
                // });
                res.json({
                    message: "Login successful!",
                    res: results
                });  
                res.end();              
            }
    });
});

app.listen(3001);