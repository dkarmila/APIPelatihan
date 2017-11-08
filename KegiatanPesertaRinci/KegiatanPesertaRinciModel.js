let mongoose = require('mongoose');

let kegiatanPesertaRinci = mongoose.Schema(
    {
        KdKegiatanPeserta: String,
        JamMulai: "",
        JamSelesai: "",
        StatusHari: String,
        KeteranganHari: String
    },
    {
        collection: 'KegiatanPesertaRinci'
    }
);

let KegiatanPesertaRinci = module.exports = mongoose.model('KegiatanPesertaRinci', kegiatanPesertaRinci);