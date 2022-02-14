const express = require('express');
const { test, chat } = require('../../controller/admin/auth');
const router = express.Router();

router.get('/admin/test', test);
router.get('/admin/chat', chat);
module.exports = router;