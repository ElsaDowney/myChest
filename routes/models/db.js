const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

//下面代码只是例子,对自己的需要自行写代码
exports.findAll = function(callback){

  MongoClient.connect(url, function (err, db) {
    findClothes(db, function (result) {
      db.close();
      callback(result);
    });
  });

  const findClothes = function (db, callback) {

  const collection = db.collection('clothes');
  collection.find({}).toArray(function (err, docs) {
    console.log(docs);
    callback(docs);
  });
};
}

exports.save = function(){
  //.......
}
