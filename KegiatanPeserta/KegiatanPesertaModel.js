let mongoose = require('mongoose');

let kegiatanPeserta = mongoose.Schema(
    {
        KdPeserta: String,
        KdStaticPeserta: String,
        KdKegiatanPeserta: String,
        TglMulai: Date,
        TglSelesai: Date,
        KdPegawai: String
    },
    {
        collection: 'KegiatanPeserta'
    }
);

let KegiatanPeserta = module.exports = mongoose.model('KegiatanPeserta', kegiatanPeserta);