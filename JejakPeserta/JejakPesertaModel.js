let mongoose = require('mongoose');

let jejakPeserta = mongoose.Schema(
    {
        KdPeserta: String,
	    KdAngkatan: String,
	    Tgl: Date,
	    TipePeserta: String
    },
    {
        collection: 'JejakPeserta'
    }
);

let JejakPeserta = module.exports = mongoose.model('JejakPeserta', jejakPeserta);