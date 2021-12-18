const express = require('express');
const router = express.Router();

const chairmanController = require('./chairmanController');
const staffController = require('./staff/staffController');
const bookBorrowingReportController = require('./book_borrowing_report/bookBorrowingReportController');
const bookReturnReportController = require('./book_return_report/bookReturnReportController');
const debtReportController = require('./debt_report/debtReportController');

router.get('/',chairmanController.menu);
router.get('/logout',chairmanController.logout);

// STAFF
router.get('/staff',staffController.list);
router.get('/staff/add',staffController.add);
router.get('/staff/detail',staffController.detail);
router.get('/staff/list',staffController.list);

// DEBT REPORT
router.get('/debt-report',debtReportController.create);
router.get('/debt-report/print',debtReportController.print);
router.get('/debt-report/create',debtReportController.create);

// BOOK RETURN REPORT
router.get('/book-return-report',bookReturnReportController.create);
router.get('/book-return-report/print',bookReturnReportController.print);
router.get('/book-return-report/create',bookReturnReportController.create);


//BOOK BORROWING REPORT
router.get('/book-borrowing-report',bookBorrowingReportController.create);
router.get('/book-borrowing-report/print',bookBorrowingReportController.print);
router.get('/book-borrowing-report/create',bookBorrowingReportController.create);


module.exports = router;