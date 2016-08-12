const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

//下面代码只是例子,对自己的需要自行写代码
exports.getAll = function(callback){
    MongoClient.connect(url,function(err,db){
      const collection = db.collection('clothes');
      collection.find({}).toArray(function(err,docs){
        callback(docs);
      })
      db.close();
    })
}


exports.save = function(data, callback){
  console.log(data);
  MongoClient.connect(url,function(err,db){
    const collection = db.collection('clothes');
    collection.insert(data,function(err,result){
      callback(result);
    })
    db.close();
  })
}
