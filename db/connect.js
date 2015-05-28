var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection(config[env].url);

autoIncrement.initialize(connection);

mongoose.connect(config[env].url);

