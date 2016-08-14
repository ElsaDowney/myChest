const express = require('express');
const userAction = require('./actions/userAction');
const clothesAction = require('./actions/clothesAction');
const matchAction = require('./actions/matchAction');

const app = new express();
const router = express.Router();

router.get('/clothes/:_id',clothesAction.getAllClothes);
router.post('/clothes',clothesAction.save);


router.post('/login',userAction.selectOneToLogin);
router.post('/register',userAction.saveToRegister);

router.post('/allMatches',matchAction.AllMatches);

//......

module.exports = router;
