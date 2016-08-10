const express = require('express');
const actions = require('./actions/userAction');
const app = new express();
const router = express.Router();

router.get('/clothes',actions.findAll);

router.post('/clothes',actions.save);

//......

module.exports = router;
