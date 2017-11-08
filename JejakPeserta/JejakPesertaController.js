JejakPeserta = require('./JejakPesertaModel.js');

module.exports.getJejakPeserta = function(callback,limit){
    JejakPeserta.find(callback).limit(limit);
}

module.exports.getJejakPesertaById = function(id, callback){
    JejakPeserta.findById(id, callback);
}

module.exports.createJejakPeserta = function(dataJejakPeserta, callback){
    JejakPeserta.create(dataJejakPeserta, callback);
}

module.exports.upJejakPeserta = function(id, dataJejakPeserta, callback){
    JejakPeserta.findByIdAndUpdate(id, dataJejakPeserta, callback);
}

module.exports.rmJejakPeserta = function(id, callback){
    JejakPeserta.findByIdAndRemove(id, callback);
}