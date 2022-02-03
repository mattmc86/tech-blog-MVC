const router = require('express').Router();
const sequelize = require('../config/connection');
const Blogs = require('../models/Blogs');

router.get('/', async (req, res) => {
  try{
  const blog = await Blogs.findAll();
  const sanitisedData = blog.get({ plain: true });
  res.render('blog', sanitisedData);
  }catch (err){
    res.status(500).json(err);
  }

});

module.exports = router;