const match = require('../models/match');

exports.updateMatches = function(req,res){
  const userName = req.body.userName;
  const matches = req.body.matches;
  const c_id1 = parseInt(matches[0]);
  const c_id2 = parseInt(matches[1]);
   match.updateMatches(userName,c_id1,c_id2,function(result){
   });
   match.updateMatches(userName,c_id2,c_id1,function(result){
   });
   res.json("ok").end();
};


exports.AllMatches = function(req,res){
    match.AllMatches(req.params.name,function(result){
        res.json(result.clo_list).end();
    });
};
