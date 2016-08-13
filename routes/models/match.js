const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

exports.allMatches=function(callback){

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
