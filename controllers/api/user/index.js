
const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const signupRoutes = require('./SignupRoutes');

router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);

module.exports = router;