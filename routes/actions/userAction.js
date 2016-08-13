const db = require('../models/user');
// const express = require('express');
// var router = express.Router();

exports.selectOneToLogin = function (req, res) {
    db.selectOne({userName: req.body.name}, function (result) {
        if (result.length === 0) {
            console.log("用户不存在");
            res.send('0');
        }
        else if (result[0].password === req.body.pwd) {
            console.log("登陆成功");
            res.send('1');
        }
    })
};


exports.saveToRegister = function (req, res) {

    const data = {userName: req.body.name, password: req.body.pwd};

    db.register(data, function (result) {

        if (result === '0') {
            res.send('0').end();
        }
        else {
            res.send("1").end();
        }
    })
};
