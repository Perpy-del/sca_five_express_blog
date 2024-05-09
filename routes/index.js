var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let navigationLinks = [
      'Multiplex PCR', 'Technology', 'Design', 'Culture', 'Business', 'Sports'
  ];

  let rawdata = fs.readFileSync('./database/posts.json');

  let posts = JSON.parse(rawdata);

  let featuredPosts = posts.filter('is_featured')

  res.render('blog', {
    title: 'She Code Queens',
    links: navigationLinks,
    posts: posts
  });

});

module.exports = router;
