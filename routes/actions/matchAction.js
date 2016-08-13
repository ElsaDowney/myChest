const match = require('../models/match');
exports.updateMatches = function(req,res){
  //  match.updateMatches(req.body,function(result){
  //    res.json(result).end();
  //  });
  res.json('...').end();
};




exports.AllMatches = function(req,res){
    match.AllMatches(function(result){
        res.json(result).end();

    });
};
