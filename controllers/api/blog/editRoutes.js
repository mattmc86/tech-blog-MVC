router.put("/:id", async (req, res) => {
    try {
      const updatedBlog = await Blog.update(req.body);
      res.json(updatedBlog);
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  });