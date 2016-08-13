const clothes = require('../models/clothes');

exports.getAllClothes = function (req, res) {
    clothes.getAllClothes(req.params._id,function (result) {
        res.json(result.clo_list).end();
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
