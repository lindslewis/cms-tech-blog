const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', blogRoutes);

module.exports = router;