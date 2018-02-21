var controllers = require('./controllers'),
    Joi = require("joi");

module.exports = [
    {
        method: 'POST',
        path: '/user/login',
        config: {
            handler: controllers.Users.login,
            tags: ['api'],
            description: 'User Login',
            validate: {
                payload: {
                    username: Joi.string().required().description("Username"),
                    password: Joi.string().required().min(4).description("Password")
                }
            }
        }
    }
];
