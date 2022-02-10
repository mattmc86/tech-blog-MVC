const router = require('express').Router();
const sequelize = require('../../../config/connection');
const Blogs = require('../../../models/Blog');


router.post("/addBlog", async (req, res) => {
  try {
    const dbUserData = await Blogs.create({
      blog_title: req.body.blog_title,
      blog_content: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;