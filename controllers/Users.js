var models = require('../models'),
    Boom = require('boom'),
    settings = require('config'),
    _ = require('lodash');


var login = function (request, reply) {

    models.User.findOne({username: request.payload.username, active: true})
        .exec((err, user) => {
            if (err) {
                reply(Boom.internal('Error interno'));
            } else if (user === null){
                reply(Boom.notFound());
            } else {
               reply("OK");
            }
        });
};

module.exports = {

    login: login
};