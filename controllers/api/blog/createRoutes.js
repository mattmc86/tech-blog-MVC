const router = require('express').Router();
const sequelize = require('../../../config/connection');
const Blogs = require('../../../models/Blog');


router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blogs.findAll();

    const blogs = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;