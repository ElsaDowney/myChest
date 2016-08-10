const db = require('../models/db');
const express = require('express');
var router = express.Router();

//以下代码只是例子,根据自己的需要自行补充代码
exports.findAll = function(req,res){
  db.findAll(function(result){
    res.json(result).end();
  });
}

exports.save = function(req,res){

}
