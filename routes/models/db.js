const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

//下面代码只是例子,对自己的需要自行写代码
exports.findAll = function (callback) {

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
};

exports.save = function () {
    //.......
};

exports.allMatches=function(){

  MongoClient.connect(url, function (err, db) {
    allMatches(db, function (result) {
      db.close();
      callback(result);
    });
  });

  const allMatches=function(db,callback){

    const collection=db.collection('matches');
    collection.find({}).toArray(function(err,docs){
      console.log(docs);
      callback(docs);
    });
  };
};


exports.selectOne = function (name, callback) {

    var selectData = function (db, callback) {
        //连接到表
        const collection = db.collection('clothes');

        collection.find(name).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };

    MongoClient.connect(url, function (err, db) {
        selectData(db, function (result) {
            callback(result);
        });

    });

};


exports.register = function (data, callback) {

    var insertData = function (db, callback) {
        const collection = db.collection('clothes');

        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };

    var selectData = function (db, callback) {
        //连接到表
        const collection = db.collection('clothes');
        collection.find({userName: data.userName}).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };


    MongoClient.connect(url, function (err, db) {


        selectData(db, function (result) {

            if (result.length === 0) {

                insertData(db, function (result) {
                    console.log(result);
                    callback(result);

                });
            }
            else {
                callback('0');
            }
        });
    });

};