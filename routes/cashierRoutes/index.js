const express = require('express');
const router = express.Router();

const cashierController = require('./cashierController');
const penaltyFormController = require('./penalty_form/penaltyFormController');
const debtReportController = require('./debt_report/debtReportController');

router.get('/',cashierController.menu);
router.get('/logout',cashierController.logout);

// DEBT REPORT
router.get('/debt-report',debtReportController.create);
router.get('/debt-report/print',debtReportController.print);
router.get('/debt-report/create',debtReportController.create);

//PENALTY FORM
router.get('/penalty-form',penaltyFormController.list);
router.get('/penalty-form/add',penaltyFormController.add);
router.get('/penalty-form/detail/:id',penaltyFormController.detail);
router.get('/penalty-form/print/:id',penaltyFormController.print);
router.get('/penalty-form/list',penaltyFormController.list);


module.exports = router;