var express = require('express');
var router = express.Router();

const librarianController = require('./librarianController');
const readerController = require('./reader/readerController');
const bookController = require('./book/bookController');
const lostBookFormController = require('./lost_book_form/lostBookFormController');
const borrowFormController = require('./borrow_form/borrowFormController');

//MENU
router.get('/',librarianController.menu);

//LOGOUT
router.get('/logout',librarianController.logout);

//READER
router.get('/reader',readerController.list);
router.get('/reader/add',readerController.add);
router.get('/reader/detail',readerController.detail);
router.get('/reader/edit',readerController.edit);
router.get('/reader/list',readerController.list);

//BOOK
router.get('/book',bookController.list);
router.get('/book/add',bookController.add);
router.get('/book/detail',bookController.detail);
router.get('/book/edit',bookController.edit);
router.get('/book/list',bookController.list);

//LOST BOOK FORM

//BORROW FORM 

module.exports = router;