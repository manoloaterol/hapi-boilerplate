var controllers = require('./controllers');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    config: {
      handler: controllers.users.get,
      tags: ['api'],
      description: 'get all users',
      auth: false
    }
  }
];
