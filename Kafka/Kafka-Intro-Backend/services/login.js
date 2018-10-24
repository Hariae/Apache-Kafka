//var MongoClient = require('../DatabaseConnectionDatabaseConnection');
var Model = require('../DatabaseConnection');
//var PropertyDetails = require('./DatabaseConnection');

var bcrypt = require('bcrypt-nodejs');


function handle_request(msg, callback){
    console.log('Inside handle request', JSON.stringify(msg));

    //Query    

    Model.Userdetails.findOne({
        'Email': msg.Email
    }, (err, user) => {

        if (err) {
            console.log("Unable to fetch user details.", err);
            // res.writeHead(400, {
            //     'Content-type': 'text/plain'
            // });
            // res.end('Error in fetching user details!');
            callback(err, "Error");
        }
        else {

            console.log("User details ", user);
            if (!bcrypt.compareSync(msg.Password, user.Password)) {
                // res.writeHead(401,
                //     {
                //         'Content-type': 'text/plain'
                //     })
                console.log('Invalid Credentials!');
                //res.end('Invalid Credentials!');
                callback(err, "Error");
            }
            else {
                // res.cookie('cookie', user.FirstName, {
                //     maxAge: 360000,
                //     httpOnly: false,
                //     path: '/'
                // });
                // res.cookie('Accounttype', user.Accounttype, {
                //     maxAge: 360000,
                //     httpOnly: false,
                //     path: '/'
                // });
                // req.session.user = user;


                // res.writeHead(200, {
                //     'Content-type': 'text/plain'
                // });
                // res.end('Login successful!');
                callback(null, user);
            }


        }

    });
}

exports.handle_request = handle_request;