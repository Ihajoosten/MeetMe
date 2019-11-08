const express = require('express');
const router = express.Router();

const meetingsCtrl = require('../controllers/meetings');

router.get('/meetings', meetingsCtrl.getmeetings);
router.get('/meetings/:id', meetingsCtrl.getmeetingById);

module.exports = router;
