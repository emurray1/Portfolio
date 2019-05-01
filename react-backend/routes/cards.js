var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');

  res.json([{
      content : {
            title: "My Story",
            subtitle: "Who I am, what I've done",
            date : "May 1st, 2019",
            img : "../sources/headshot.jpg",
            caption : "Eric on the left, Mason in the middle, Jessica on the right",
            content : "Hi, I'm Eric. I was born, raised, and educated in the sleepy, brave little state of Vermont. I have experienced life in a small town, lived in the Caribbean, and babysat passenger jets.",
            hiddenContent : "I have seen my baby boy grow, learn, and love. I have watching my wife overcome challenges with a level of grace that I can only hope to achieve. I have done my best to appreciate those moments in life that are quiet and still. Every experience and individual has left a profound mark on my life, I am thankful for each and every one."
      }
          }]);

});

module.exports = router;
