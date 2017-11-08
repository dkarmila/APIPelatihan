KegiatanPesertaRinci = require('./KegiatanPesertaRinciModel.js');

module.exports.getKegiatanPesertaRinci = function(callback,limit){
    KegiatanPesertaRinci.find(callback).limit(limit);
}

module.exports.getKegiatanPesertaRinciById = function(id, callback){
    KegiatanPesertaRinci.findById(id, callback);
}

module.exports.createKegiatanPesertaRinci = function(dataKegiatanPesertaRinci, callback){
    KegiatanPesertaRinci.create(dataKegiatanPesertaRinci, callback);
}

module.exports.upKegiatanPesertaRinci = function(id, dataKegiatanPesertaRinci, callback){
    KegiatanPesertaRinci.findByIdAndUpdate(id, dataKegiatanPesertaRinci, callback);
}

module.exports.rmKegiatanPesertaRinci = function(id, callback){
    KegiatanPesertaRinci.findByIdAndRemove(id, callback);
}