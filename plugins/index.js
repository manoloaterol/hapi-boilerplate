var HapiSwagger = require('hapi-swagger'),
  Inert = require("inert"),
  Vision = require("vision"),
  pack = require("../package");

module.exports = [
  //set up good to log every kind of event. Change according to your needs.
  {
    register:require('good'),
    options:{
      reporters: {
        myConsoleReporter: [{
          module: 'good-console'
        }, 'stdout']
      }
    }
  },
  //require additional plugins here
  // Hapi Swagger
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: {
      info: {
        title: 'Hapi Boilerplate API',
        version: pack.version,
      },
      schemes: ['http']
    }
  }
];
