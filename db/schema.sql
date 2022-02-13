DROP DATABASE IF EXISTS tech_blog_db;
CREATE DATABASE tech_blog_db;

USE tech_blog_db;

-- mysql -u root -p

INSERT INTO blog (blog_title, blog_content, user_id)
 VALUES  ("Test Title.", "Some blog content", 1);

 INSERT INTO user (username, password)
 VALUES  ("sophieM", "Password1");

 INSERT INTO user (username, password)
 VALUES  ("georgeM", "Password3");