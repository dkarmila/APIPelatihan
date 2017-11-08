KegiatanPeserta = require('./KegiatanPesertaModel.js');

module.exports.getKegiatanPeserta = function(callback,limit){
    KegiatanPeserta.find(callback).limit(limit);
}

module.exports.getKegiatanPesertaById = function(id, callback){
    KegiatanPeserta.findById(id, callback);
}

module.exports.createKegiatanPeserta = function(dataKegiatanPeserta, callback){
    KegiatanPeserta.create(dataKegiatanPeserta, callback);
}

module.exports.upKegiatanPeserta = function(id, dataKegiatanPeserta, callback){
    KegiatanPeserta.findByIdAndUpdate(id, dataKegiatanPeserta, callback);
}

module.exports.rmKegiatanPeserta = function(id, callback){
    KegiatanPeserta.findByIdAndRemove(id, callback);
}

