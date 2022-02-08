

const router = require('express').Router();

const createRoutes = require('./createRoutes');
//const commentRoutes = require('./commentRoutes');
//const deleteRoutes = require('./deleteRoutes');

router.use('/blogs', createRoutes);
//router.use('/comment', commentRoutes);
//router.use('/delete', deleteRoutes);

module.exports = router;