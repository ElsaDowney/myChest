const match = require('../models/match');

exports.updateMatches = function(req,res){
  const _id = req.body._id;
  const matches = req.body.matches;
  const c_id1 = parseInt(matches[0]);
  const c_id2 = parseInt(matches[1]);
   match.updateMatches(_id,c_id1,c_id2,function(result){
   });
   match.updateMatches(_id,c_id2,c_id1,function(result){
   });
   res.json("ok").end();
};


exports.AllMatches = function(req,res){
    match.AllMatches(function(result){
        res.json(result).end();

    });
};
