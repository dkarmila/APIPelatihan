let express = require('express');
let route = express.Router();
let jejakPesertaController = require('./JejakPesertaController.js');

route.get('/jejakpeserta', function(req, res){
    jejakPesertaController.getJejakPeserta(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.get('/jejakpeserta/:id', function(req, res){
    jejakPesertaController.getJejakPesertaById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.post('/jejakpeserta', function(req, res){
    let dataJejakPeserta = req.body;
    jejakPesertaController.createJejakPeserta(dataJejakPeserta, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.put('/jejakpeserta/:id', function(req, res){
    let dataJejakPeserta = req.body;
    jejakPesertaController.upJejakPeserta(req.params.id, dataJejakPeserta, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.delete('/jejakpeserta/:id', function(req,res){
    jejakPesertaController.rmJejakPeserta(req.params.id,function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=route;