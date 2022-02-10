const router = require('express').Router();
const sequelize = require('../../../config/connection');
const Blogs = require('../../../models/Blog');


router.delete("/:id", async (req, res) => {
    try {
      const deletedBlog = await Blogs.destroy(req.body);
      res.json(deletedBlog);
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  });

module.exports = router;