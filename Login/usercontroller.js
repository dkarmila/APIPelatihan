User = require ('./usermodel.js');

module.exports.getUser = function(callback,limit){
    User.find(callback).limit(limit);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.createUser = function(dataUser, callback){
    User.create(dataUser, callback);
}

module.exports.upUser = function(id, dataUser, callback){
    User.findByIdAndUpdate(id, dataUser, callback);
}

module.exports.delUser = function(id, callback){
    User.findByIdAndRemove(id, callback);
}