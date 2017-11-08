let mongoose = require('mongoose');

let login = mongoose.Schema(
    {
        username: String,
	    password: String
    },
    {
        collection: 'Login'
    }
);

let Login = module.exports = mongoose.model('Login', login);