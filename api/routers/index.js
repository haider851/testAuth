var express = require('express');
var router = express.Router();
var ctrl = require('../controller.js');

router
    .route('/otp')
    .get(ctrl.auth)

router
    .route('/otp/:id')
    .get(ctrl.authTest);
    module.exports = router;