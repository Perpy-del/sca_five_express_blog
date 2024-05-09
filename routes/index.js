var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // let navigationLinks = [
  //     'Multiplex PCR', 'Technology', 'Design', 'Culture', 'Business', 'Sports'
  // ];

  let rawdata = fs.readFileSync('./database/posts.json');

  let posts = JSON.parse(rawdata);

  // return only the categories
  let categories = posts.map(post => post.category);

  // return only the unique categories
  const uniqueCategories = new Set(categories);

  // convert the Set back to array
  const itemCategories = Array.from(uniqueCategories);

  // Return an array of items with the is_featured set to true
  const featuredArticles = posts.filter(post => post.is_featured);

  // Return an array of items with the is+featured set to false
  const notFeaturedArticles = posts.filter(post => !post.is_featured);

  res.render('blog', {
    title: 'She Code Queens',
    links: itemCategories,
    featuredPosts: featuredArticles,
    posts: notFeaturedArticles
  });

});

module.exports = router;
