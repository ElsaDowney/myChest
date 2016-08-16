const clothes = require('../models/clothes');

exports.getAllClothes = function (req, res) {
    clothes.getAllClothes(req.params._id,function (result) {
        res.json(result.clo_list).end();
    });
};

exports.deleteOneClothes = function(req,res){
  clothes.deleteOneClothes(req.body,function(result){
    res.json(result).end();
  })
};

exports.save = function(req,res){
  clothes.save(req.body,function(result){
    res.json(result).end();
  });
};



exports.addList = function (req, res) {
    console.log(req.body.c_id);
    const data = {
        c_id: req.body.c_id,
        season: req.body.season,
        style: req.body.style,
        sort: req.body.sort,
        colors: req.body.colors,
        matches: req.body.matches,
        image:req.body.image
    };
    clothes.add(data,function (result) {
        // res.json(result).end();
        res.send(req.body);
    })
};
