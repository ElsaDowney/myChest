const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myChest';

exports.updateMatches = function(userName,c_id1,c_id2,callback){
  MongoClient.connect(url, function (err, db) {
    const collection=db.collection('clothes');
    collection.update(
      {"userName":userName,"clo_list.c_id":c_id1},
      {"$push":{"clo_list.$.matches":c_id2}},
      function(err,docs){
        callback(docs);
    });
    db.close();
  });
};

exports.AllMatches=function(userName,callback){

    MongoClient.connect(url, function (err, db) {
        AllMatches(db,userName, function (result) {
            db.close();
            callback(result);
        });
    });
    const AllMatches=function(db,userName,callback){

        const collection=db.collection('clothes');
        collection.findOne({userName:userName},function(err,docs){
            callback(docs);
        });
    };
};
