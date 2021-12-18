const express = require('express');
const router = express.Router();

const chairmanController = require('./chairmanController');
const staffManagementController = require('./staff_management/staffManagementController');

router.get('/',chairmanController.menu);
router.get('/logout',chairmanController.logout);

// STAFF
router.get('/staff',staffManagementController.list);
router.get('/staff/add',staffManagementController.add);
router.get('/staff/detail',staffManagementController.detail);
router.get('/staff/list',staffManagementController.list);




module.exports = router;