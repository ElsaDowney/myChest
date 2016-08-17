const MongoClient = require('mongodb').MongoClient;

//数据库命名为myChest
const url = 'mongodb://localhost:27017/myChest';

exports.getAllClothes = function (userName,callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('clothes');
        collection.findOne({userName:userName},function (err, docs) {
            callback(docs);
        });
        db.close();
    })
};

exports.deleteOneClothes = function(idObj,callback){
    MongoClient.connect(url, function (err, db) {
      const collection = db.collection('clothes');
      collection.update({userName:idObj.userName}, {$pull:{"clo_list":{"c_id":idObj.c_id}}},function(err,result){
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

// const data = {
//     u_id:req.body.u_id,
//     clo_list:{
//         c_id: req.body.c_id,
//         season: req.body.season,
//         style: req.body.style,
//         sort: req.body.sort,
//         image: req.body.image,
//         colors: req.body.colors,
//         matches: req.body.matches
//     }
// };

// db.myFirstCollection.update({_id:1},{$push:{"auther":{"name":1}}})
exports.add = function (data, callback) {
    var insertData = function (db, callback) {
        const collection = db.collection('clothes');
        console.log(data.u_id);
        console.log(data.clo_list);
        collection.update({_id:data.u_id},
            {$push:{"clo_list":data.clo_list} });

        // collection.insert(data, function (err, result) {
        //     console.log(data);
        //     if (err) {
        //         console.log('Error:' + err);
        //         return;
        //     }
        //     callback(result);
        // });
    };

    MongoClient.connect(url, function (err, db) {

        insertData(db, function (result) {
            callback(result);

        });
    });
}
