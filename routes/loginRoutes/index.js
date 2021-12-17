var express = require('express');
var router = express.Router();

const loginController = require('./loginController');

router.get('/',loginController.login);

router.get('/foget-password', loginController.forgetPassword);

module.exports = router;