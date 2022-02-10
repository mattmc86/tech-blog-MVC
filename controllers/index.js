const router = require('express').Router();

const userRoutes = require('./api/user');
const blogRoutes = require('./api/blog');
const htmlRoutes = require('./html');

router.use('/', htmlRoutes)
router.use('/api/blog', blogRoutes);
router.use('/api/user', userRoutes);


module.exports = router;
