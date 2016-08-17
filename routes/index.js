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

module.exports = router;
