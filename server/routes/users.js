const express = require('express');
const router = express.Router();

const UsersCtrl = require('../controllers/users');

router.get('/users', UsersCtrl.getUsers);

module.exports = router;
