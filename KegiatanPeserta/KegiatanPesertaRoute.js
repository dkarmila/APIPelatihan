let express = require('express');
let route = express.Router();
let KegiatanPesertaController = require('./KegiatanPesertaController.js');

route.get('/kegiatanpeserta', function(req, res){
    KegiatanPesertaController.getKegiatanPeserta(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.get('/kegiatanpeserta/:id', function(req, res){
    KegiatanPesertaController.getKegiatanPesertaById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.post('/kegiatanpeserta', function(req, res){
    let dataKegiatanPeserta = req.body;
    KegiatanPesertaController.createKegiatanPeserta(dataKegiatanPeserta, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.put('/kegiatanpeserta/:id', function(req, res){
    let dataKegiatanPeserta = req.body;
    KegiatanPesertaController.upKegiatanPeserta(req.params.id, dataKegiatanPeserta, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.delete('/kegiatanpeserta/:id', function(req,res){
    KegiatanPesertaController.rmKegiatanPeserta(req.params.id,function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=route;