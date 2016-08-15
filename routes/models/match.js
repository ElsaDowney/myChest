const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

exports.updateMatches = function(_id,c_id1,c_id2,callback){
  MongoClient.connect(url, function (err, db) {
    const collection=db.collection('clothes');
    collection.update(
      {"_id":_id,"clo_list.c_id":c_id1},
      {"$push":{"clo_list.$.matches":c_id2}},
      function(err,docs){
        callback(docs);
    });
    db.close();
  });
};

exports.AllMatches=function(callback){

    MongoClient.connect(url, function (err, db) {
        AllMatches(db, function (result) {
            db.close();
            callback(result);
        });
    });

    const AllMatches=function(db,callback){

        const collection=db.collection('matches');
        collection.find({}).toArray(function(err,docs){
            callback(docs);
        });
    };
};
