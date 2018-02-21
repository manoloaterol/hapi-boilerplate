var Hapi = require('hapi');

var path = require('path');
var settings = require('config');

var routes = require('./routes');
var plugins = require('./plugins');
var models = require('./models');
var views = require('./views');

var server = new Hapi.Server({
    connections: {
        routes: {
            cors: settings.cors
        }
    }
});
server.connection({port: settings.port, host: settings.host});

// Export the server to be required elsewhere.
module.exports = server;

var initDb = function (cb) {
    if (settings.database.active) {
        mongoose.connect(settings.database.host);

        var db = mongoose.connection;
        db.on('error', function (err) {
            console.log("Error accessing DB");
            console.log(err);
        });
        db.once('open', function () {
            // we're connected!
            console.log("DB Connection success");
            models = require('./models'); // Initialize models
            cb();
        });
    } else {
        cb();
    }

};

var setup = function (done) {

    //Register all plugins
    server.register(plugins, function (err) {
        if (err) {
            throw err; // something bad happened loading a plugin
        }

        // Add the server routes
        server.route(routes);
    });

    // Add server views
    server.views(views);


    initDb(function () {
        done();
    });
};

var start = function () {
    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
        settings.defaultUri = server.info.uri;
    });
};

setup(function () {
    start();
});
