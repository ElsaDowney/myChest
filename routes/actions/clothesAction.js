const clothes = require('../models/clothes');

exports.getAllClothes = function (req, res) {
    clothes.getAllClothes(req.params.name, function (result) {
        res.json(result.clo_list).end();
    });
};

exports.deleteOneClothes = function (req, res) {
    clothes.deleteOneClothes(req.body, function (result) {
        res.json(result).end();
    })
};

exports.save = function (req, res) {
    clothes.save(req.body, function (result) {
        res.json(result).end();
    });
};

exports.addList = function (req, res) {
    const userName = req.body.userName;
    const clo_list = {
        c_id: req.body.c_id,
        season: req.body.season,
        style: req.body.style,
        sort: req.body.sort,
        image: req.body.image,
        colors: req.body.colors,
        matches: req.body.matches
    }

    clothes.add(userName,clo_list, function (result) {
        res.json(result).end();
    })
};

exports.getUserId = function (req, res) {
    clothes.getAllClothes(req.params.name, function (result) {
        res.json(result._id).end();
    });
};



