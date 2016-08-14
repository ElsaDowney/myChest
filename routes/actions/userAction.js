const express = require('express');
var router = express.Router();

//以下代码只是例子,根据自己的需要自行补充代码
exports.findAll = function (req, res) {
    db.findAll(function (result) {
        res.json(result).end();
    });
};

exports.save = function(req,res){
  db.save(req.body,function(result){
      console.log(req.body);
    res.json(result).end();
  });
}

exports.AllMatches = function(req,res){
    db.AllMatches(function(result){
        res.json(result).end();

    });
};
const db = require('../models/user');

exports.selectOneToLogin = function (req, res) {
    db.selectOne({userName: req.body.name}, function (result) {
        if (result.length === 0) {
            res.send('0');
        }
        else if (result[0].password === req.body.pwd) {
            res.send('1');
        }
    })
};


exports.saveToRegister = function (req, res) {

    const data = {userName: req.body.name, password: req.body.pwd,clo_list:[]};
    db.register(data, function (result) {
        if (result === '0') {
            res.send('0').end();
        }
        else {
            res.send("1").end();
        }
    })
};
