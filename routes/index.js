const express = require('express');
const userAction = require('./actions/userAction');
const clothesAction = require('./actions/clothesAction');
const matchAction = require('./actions/matchAction');

const app = new express();
const router = express.Router();

router.get('/clothes/:name',clothesAction.getAllClothes);
router.post('/clothes',clothesAction.save);
router.delete('/clothes',clothesAction.deleteOneClothes);
router.post('/clothes/matches',matchAction.updateMatches);


router.post('/login',userAction.selectOneToLogin);
router.post('/register',userAction.saveToRegister);

router.get('/allMatches',matchAction.AllMatches);

router.get('/allMatches/:name',matchAction.AllMatches);

router.post('/addList', clothesAction.addList);
router.get('/getUserId/:name',clothesAction.getUserId);

var busboy = require("connect-busboy");
router.use(busboy());

router.put("/upload", function(req, res){
    req.busboy.on("file", function(fieldName, file, c_id){

        var imageName = 'image'+ c_id.toString()+'.jpg';
        console.log(imageName);
        var path = __dirname + "/../public/images/" + imageName;
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

        res.send(imageName);
    });
    req.pipe(req.busboy);
});

module.exports = router;
