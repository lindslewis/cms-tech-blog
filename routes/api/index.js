const router = require('express').Router();
const userRoutes = require('');
const commentRoutes = require('');
const blogRoutes = require('');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', blogRoutes);

module.exports = router;