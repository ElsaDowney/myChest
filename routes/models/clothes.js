const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

exports.getAllClothes = function (userName, callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('clothes');
        collection.findOne({userName: userName}, function (err, docs) {
            callback(docs);
        });
        db.close();
    })
};

exports.deleteOneClothes = function (idObj, callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('clothes');
        collection.update({userName: idObj.userName}, {$pull: {"clo_list": {"c_id": idObj.c_id}}}, function (err, result) {
            callback(result)
        });
        db.close();
    })
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

// exports.updateMatches = function(userName,c_id1,c_id2,callback){
//     MongoClient.connect(url, function (err, db) {
//         const collection=db.collection('clothes');
//         collection.update(
//             {"userName":userName,"clo_list.c_id":c_id1},
//             {"$push":{"clo_list.$.matches":c_id2}},
//             function(err,docs){
//                 callback(docs);
//             });
//         db.close();
//     });
// };
exports.add = function (userName, clo_list, callback) {

    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('clothes');

        collection.update({"userName":userName},
            {$push: {"clo_list": clo_list}},
            function (err, docs) {
                callback(docs);
            });
        db.close();
    });
}
