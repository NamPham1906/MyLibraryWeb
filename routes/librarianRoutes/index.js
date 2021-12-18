var express = require('express');
var router = express.Router();

const librarianController = require('./librarianController');

router.get('/',librarianController.menu);

router.get('/logout',librarianController.logout);
module.exports = router;