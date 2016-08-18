const express = require('express');
const db = require('../models/user');

exports.selectOneToLogin = function (req, res) {

    db.selectOne({userName: req.body.name}, function (result) {
        if (result.length === 0) {
            res.send('0');
        }
        else {
          if (result[0].password === req.body.pwd) {
            res.send('1');
        }else {
            res.send('2');
        }
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
