const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

exports.getAllClothes = function (_id,callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('clothes');
        collection.findOne({_id:parseInt(_id)},function (err, docs) {
            callback(docs);
        });
        db.close();
    })
};

exports.deleteOneClothes = function(idObj,callback){

    // MongoClient.connect(url, function (err, db) {
    //   const collection = db.collection('clothes');
    //   collection.update({_id:idObj._id}, {$pull:{"clo_list":{"c_id":idObj.c_id}}},function(err,result){
    //     callback(result)
    //     });
    //   db.close();
    // })
    callback("nihao");
};

exports.save = function (data, callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('clothes');
        collection.insert(data, function (err, result) {
            callback(result);
        });
        db.close();
    })
};

exports.add = function (data, callback) {
    var insertData = function (db, callback) {
        const collection = db.collection('list');

        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };

    MongoClient.connect(url, function (err, db) {

        insertData(db, function (result) {
            callback(result);

        });
    });
}
