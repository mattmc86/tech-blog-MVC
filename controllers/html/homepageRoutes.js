const router = require("express").Router();
const { Blog, User } = require("../../models");

// get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = (await Blog.findAll({
      attributes: ["id", "blog_title", "description"],
      include: [{ model: User }, { model: Comments }],
    })).map((blog) =>
      blog.get({ plain: true })
    );
    res.render("homepage", { blogs, loggedIn: req.session.loggedIn });
    //res.json(blogs);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;