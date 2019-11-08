const express = require('express');
const router = express.Router();

const CategoriesCtrl = require('../controllers/categories');

router.get('/categories', CategoriesCtrl.getCategories);

module.exports = router;
