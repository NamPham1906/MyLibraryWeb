var express = require('express');
var router = express.Router();

const librarianController = require('./librarianController');
const readerManagementController = require('./reader_management/readerManagementController');
const bookManagementController = require('./book_management/bookManagementController');
const lostBookFormManagementController = require('./lost_book_form_management/lostBookFormManagementController');
const borrowFormManagementController = require('./borrow_form_management/borrowFormManagementController');

//MENU
router.get('/',librarianController.menu);

//LOGOUT
router.get('/logout',librarianController.logout);

//READER
router.get('/reader',readerManagementController.list);
router.get('/reader/add',readerManagementController.add);
router.get('/reader/detail',readerManagementController.detail);
router.get('/reader/edit',readerManagementController.edit);
router.get('/reader/list',readerManagementController.list);

//BOOK

//LOST BOOK FORM

//BORROW FORM 

module.exports = router;