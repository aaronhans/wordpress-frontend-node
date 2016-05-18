var express = require('express');
var router = express.Router();

router.get('/', require('./routes/home'));
router.get('*',require('./routes/404'));

module.exports = router;
