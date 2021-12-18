var express = require('express');
var router = express.Router();

const chairmanController = require('./chairmanController');

router.get('/',chairmanController.menu);

router.get('/logout',chairmanController.logout);
module.exports = router;