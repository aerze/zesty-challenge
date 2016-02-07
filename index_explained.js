
// include native libraries
var path = require('path');

// include npm libraries
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// create a new instance of express
var app = express();

// attach middlewares
// app.use will apply the middleware to all income requests
app.use(logger('dev'));     // logs request in a simple format
app.use(bodyParser.json()); // parses incoming resques body into JSON, if proper header is present
app.use(bodyParser.urlencoded({extended: true})); // parses url endoded request bodies

// this is custom middleware
// request  <object> info about the incoming request
// response <object> response being built to be sent
// next     <function> passes the above objects into the next middleware
app.use(function(req, res, next) {

    // modify response headers
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // pass on to the next middleware
    next();

});

// define routes
// note this is also techinically middleware
app.use('/code/challenge', function (req, res) {

    // set response status to 201
	res.status(201);

    // define resume info
	var responseJson = {
        website: 'mythril.co',
        email: 'gus@mythril.co',
		name: { first: 'Gus', last: 'Suarez' },
		github_repo_link: 'https://github.com/aerze'
	};

    // send back response object
    // .json, sends back the object as stringified json in the body
    //   and sets the header to application/json
	res.json(responseJson);

});

// start the server, set to listen on port 8080
// run callback when the server is ready and listrning
var server = app.listen(8080, function () {
	console.log('Your server is running on port 8080');
});
