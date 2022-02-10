const User = require("./User")
const Comments = require("./Comments")
const Blog = require("./Blog")

  Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade",
  });

  Blog.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: "cascade",
  });
  
  Comments.belongsTo(Blog, {
      foreignKey: 'blog_id',
      onDelete: "cascade",
  });

  Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade",
});

  User.hasMany(Blog, {
      foreignKey: 'user_id',
  });

  User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: "cascade",
});

module.exports = {
    User, Comments, Blog
};