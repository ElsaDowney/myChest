const express = require('express');
const actions = require('./actions/userAction');
const app = new express();
const router = express.Router();

router.get('/clothes',actions.findAll);
router.post('/clothes',actions.save);



router.post('/login',actions.selectOneToLogin);
router.post('/register',actions.saveToRegister);

router.get('/allMatches',actions.AllMatches);

router.post('/addList',actions.addList);

//......

module.exports = router;
