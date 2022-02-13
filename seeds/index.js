const sequelize = require('../config/connection');
const Blogs = require('../models/Blog');
const Users = require('../models/User');
const blogData = require('./blog-seeds.js');
const userData = require('./blog-seeds.js');

const seedDatabase = async () => {
 await sequelize.sync({ force: true });

  await Blogs.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();