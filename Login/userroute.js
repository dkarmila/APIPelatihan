var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let verifyToken = require('../middleware/verifyToken');
let User = require('./usermodel');
global.config = require('../config/configJwt');
let UserController = require('./usercontroller.js');

router.post('/user/authenticate', function(req, res){
    let data = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne(data).lean().exec(function(err, user){
        if(err){
            return res.json({error: true});
        }
        if(!user){
            return res.status(404).json({'message':'User not found!'});
        }
        console.log(user);
        let token = jwt.sign(user, global.config.jwt_secret, {
            expiresIn: 1440 // expires in 1 hour
        });
        //console.log(token);
        res.json({error:false,token:token});
    })
});

router.get('/user', function(req,res){
    UserController.getUser(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/user/:id', function(req,res){
    UserController.getUserById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/user',function(req,res){
    let dataUser = req.body;
    UserController.createUser(dataUser, function(err, respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/user/:id', function(req,res){
    let dataUser = req.body;
    UserController.upUser(req.params.id, dataUser, function(err, respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/user/:id', function(req,res){
    UserController.delUser(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports = router;