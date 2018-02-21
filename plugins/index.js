var HapiSwagger = require('hapi-swagger'),
    Inert = require("inert"),
    Vision = require("vision"),
    pack = require("../package"),
    Blipp = require('blipp');

module.exports = [
    //set up good to log every kind of event. Change according to your needs.
    {
        register: require('good'),
        options:{
            ops: {
                interval: 300000
            },
            reporters: {
                myConsoleReporter: [{
                    module: 'good-console'
                }, 'stdout']
            }
        }
    },
    // Blipp log routes in console
    {
        register: Blipp,
        options: {
            showAuth: true,
            showStart: true
        }
    },
    // Hapi Swagger
    Inert,
    Vision,
    {
        register: HapiSwagger,
        options: {
            info: {
                title: pack.description,
                version: pack.version
            },
            schemes: ['http'],
            securityDefinitions: {
                Bearer: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'header'
                }
            },
            security: [{ 'Bearer': [] }]
        }
    }

];
