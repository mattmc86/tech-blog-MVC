const { Blog } = require('../models');
const { User } = require('../models');

const userData = [
    {
        username: 'mattM',
        password: 'password1',
       
    },
          
 ];
       
const blogData = [
  {
    blog_title: 'Test Title',
    description: 'Test content for blog one',
    username: 'mattM',
  },

];

const seedBlogs = () => Blog.bulkCreate(blogData);
const seedUsers = () => User.bulkCreate(userData);

module.exports = {seedBlogs, seedUsers};

// INSERT INTO blog (blog_title, description, username)
// VALUES  ("Test Title.", "Some blog content", "mattM");

// INSERT INTO user (username, password)
// VALUES  ("sophieM", "Password2");
