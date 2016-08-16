const express = require('express');
const userAction = require('./actions/userAction');
const clothesAction = require('./actions/clothesAction');
const matchAction = require('./actions/matchAction');

const app = new express();
const router = express.Router();


router.get('/clothes/:_id',clothesAction.getAllClothes);
router.post('/clothes',clothesAction.save);

router.delete('/clothes',clothesAction.deleteOneClothes);
router.post('/clothes/matches',matchAction.updateMatches);

router.post('/addList',clothesAction.addList)


router.get('/clothes', clothesAction.findAll);
router.post('/clothes', clothesAction.save);
router.post('/addList', clothesAction.addList)




router.post('/login',userAction.selectOneToLogin);
router.post('/register',userAction.saveToRegister);

router.get('/allMatches',matchAction.AllMatches);


var busboy = require("connect-busboy");
router.use(busboy())

router.put("/upload", function(req, res){
    console.log(req.busboy);
    req.busboy.on("file", function(fieldName, file){
        console.log(fieldName, file);

        var path = __dirname + "/../public/images/" + 'test.jpg';
        var writeStream = require('fs').createWriteStream(path)

        file.on('data', function(data) {
            writeStream.write(data)
        });

        file.on('end', function() {
            writeStream.end();
        });

        file.on('error', function(err) {
            console.log('something is wrong :( ');
            writeStream.close();
        });

        res.send(path);
    });
    req.pipe(req.busboy);
});

module.exports = router;
