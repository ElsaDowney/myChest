const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';


exports.selectOne = function (name, callback) {
    var selectData = function (db, callback) {
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
                    callback(result);
                });
            }
            else {
                callback('0');
            }
        });
    });
}
