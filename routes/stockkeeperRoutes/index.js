var express = require('express');
var router = express.Router();

const stockkeeperController = require('./stockkeeperController');
const bookController = require('./book/bookController');
const liquidationBookController = require('./liquidation_book/liquidationBookController');

router.get('/',stockkeeperController.menu);

router.get('/logout',stockkeeperController.logout);

//BOOK
router.get('/book',bookController.list);
router.get('/book/add',bookController.add);
router.get('/book/detail',bookController.detail);
router.get('/book/list',bookController.list);

//LIQUIDATION BOOK
router.get('/liquidation-book',liquidationBookController.list);
router.get('/liquidation-book/add',liquidationBookController.add);
router.get('/liquidation-book/detail',liquidationBookController.detail);
router.get('/liquidation-book/list',liquidationBookController.list);

module.exports = router;