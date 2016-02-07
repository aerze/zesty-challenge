var path = require('path');

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();

});

app.use('/code/challenge', function (req, res) {

	res.status(201);

	var responseJson = {
		name: {
			first: 'Gus',
			last: 'Suarez'
		},
		website: 'mythril.co',
		email: 'gus@mythril.co',
		github_repo_link: 'https://github.com/aerze'
	};

	res.json(responseJson);

});

var server = app.listen(8080, function () {
	console.log('Your server is running on port 8080');
});
