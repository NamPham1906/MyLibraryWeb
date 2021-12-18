const express = require('express');
const router = express.Router();

const chairmanController = require('./chairmanController');
const staffController = require('./staff/staffController');

router.get('/',chairmanController.menu);
router.get('/logout',chairmanController.logout);

// STAFF
router.get('/staff',staffController.list);
router.get('/staff/add',staffController.add);
router.get('/staff/detail',staffController.detail);
router.get('/staff/list',staffController.list);

// DEBT REPORT


// BOOK RETURN REPORT



//BOOK BORROWING REPORT




module.exports = router;