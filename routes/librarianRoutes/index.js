var express = require('express');
var router = express.Router();

const librarianController = require('./librarianController');
const readerController = require('./reader/readerController');
const bookController = require('./book/bookController');
const lostBookFormController = require('./lost_book_form/lostBookFormController');
const borrowFormController = require('./borrow_form/borrowFormController');
const returnFormController = require('./return_form/returnFormController');

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
router.get('/book/list',bookController.list);

//LOST BOOK FORM
router.get('/lost-book-form',lostBookFormController.list);
router.get('/lost-book-form/add',lostBookFormController.add);
router.get('/lost-book-form/detail',lostBookFormController.detail);
router.get('/lost-book-form/list',lostBookFormController.list);

//BORROW FORM 
router.get('/borrow-form',borrowFormController.list);
router.get('/borrow-form/add',borrowFormController.add);
router.get('/borrow-form/detail',borrowFormController.detail);
router.get('/borrow-form/print',borrowFormController.print);
router.get('/borrow-form/list',borrowFormController.list);

// RETURN FORM
router.get('/return-form',returnFormController.list);
router.get('/return-form/add',returnFormController.add);
router.get('/return-form/detail',returnFormController.detail);
router.get('/return-form/list',returnFormController.list);

module.exports = router;