const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');
router.get('/', controller.main);
router.post('/registerComment', controller.registerComment);
module.exports = router;
