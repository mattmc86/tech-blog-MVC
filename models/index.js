const User = require("./User")
const Comments = require("./Comments")
const Blog = require("./Blog")

  Blog.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  Comments.belongsTo(Blog, {
      foreignKey: 'blog_id',
  });

  User.hasMany(Blog, {
      foreignKey: 'blog_id',
  });

module.exports = {
    User, Comments, Blog
};