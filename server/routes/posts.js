const express = require('express');
const router = express.Router();

const PostsCtrl = require('../controllers/posts');

router.get('/posts', PostsCtrl.getPosts);

module.exports = router;
