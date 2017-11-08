let express = require('express');
let route = express.Router();
let KegiatanPesertaRinciController = require('./KegiatanPesertaRinciController.js');

route.get('/kegiatanpesertarinci', function(req, res){
    KegiatanPesertaRinciController.getKegiatanPesertaRinci(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.get('/kegiatanpesertarinci/:id', function(req, res){
    KegiatanPesertaRinciController.getKegiatanPesertaRinciById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.post('/kegiatanpesertarinci', function(req, res){
    let dataKegiatanPesertaRinci = req.body;
    KegiatanPesertaRinciController.createKegiatanPesertaRinci(dataKegiatanPesertaRinci, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.put('/kegiatanpesertarinci/:id', function(req, res){
    let dataKegiatanPesertaRinci = req.body;
    KegiatanPesertaRinciController.upKegiatanPesertaRinci(req.params.id, dataKegiatanPesertaRinci, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.delete('/kegiatanpesertarinci/:id', function(req,res){
    KegiatanPesertaRinciController.rmKegiatanPesertaRinci(req.params.id,function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});
module.exports=route;