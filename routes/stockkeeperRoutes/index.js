var express = require('express');
var router = express.Router();

const stockkeeperController = require('./stockkeeperController');

router.get('/',stockkeeperController.menu);

router.get('/logout',stockkeeperController.logout);
module.exports = router;