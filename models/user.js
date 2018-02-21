"use strict";

var Joi = require('joi'),
    mongoose = require('mongoose');


var name = 'User';
var schema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    scope: String,
    active: Boolean
});


module.exports = {
    name: name,
    schema: schema
};
