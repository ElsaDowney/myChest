const clothes = require('../models/clothes');

exports.findAll = function (req, res) {
    clothes.findAll(function (result) {
        res.json(result).end();
    });
};

exports.save = function(req,res){
  clothes.save(req.body,function(result){
    res.json(result).end();
  });
};

exports.addList = function (req, res) {
    const data = {
        c_id: req.body.c_id,
        season: req.body.season,
        style: req.body.style,
        sort: req.body.sort,
        image: req.body.image,
        colors: req.body.colors,
        matches: req.body.matches
    };
    clothes.add(data,function (result) {
        res.json(result).end();
    })
};
