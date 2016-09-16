
var userHome = process.env.HOME || process.env.USERPROFILE;

var configHome = __dirname,
  serverHome = configHome.replace(/[^\/]*$/g, '');

var host = '192.168.3.126',
    port = 3007,
    externalUrl = "https://external.com";

module.exports = {
    host: host,
    port: port,
    externalUrl: externalUrl,

  configHome: configHome,
  serverHome: serverHome,

  defaultUri: null,

    cors: {
      origin: ["*"],
      headers: ["Origin", "Content-Type", "Accept", "Authorization", "X-Request-With"],
      //methods: ["POST", "PUT", "GET", "OPTIONS", "DELETE"],
      credentials: true
    },


    fileSystem: {
        userHome: userHome,
        path: userHome + "/mydata"
    },

    routes: {
    },

    views: {
      path: serverHome + '/views'
    }

};
