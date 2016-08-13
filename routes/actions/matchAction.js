const match = require('../models/match');

exports.AllMatches = function(req,res){
    match.AllMatches(function(result){
        res.json(result).end();

    });
};
