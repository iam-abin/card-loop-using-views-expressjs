var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"i phone 11",
      category:"mobile",
      description:"This is a good phone",
      image:"https://cdn.mos.cms.futurecdn.net/cMoTNtvMD8wdTYp7Wd56V8-1200-80.jpg"
    },
    {
     name:"one plus node 2t",
     category:"mobile",
     description:"it is made by one plus",
     image:"https://images.indianexpress.com/2022/07/OnePlusNord_2T_NEW.jpg"

    },
    {
      name:"nothing phone 1",
      category:"mobile",
      description:"it is made by nothing brand",
      image:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/08/carl-pei-nothing-phone-1-twitter-1659331357.jpg"
    },
    {
     name:"ssamsung s22 ultra",
     category:"mobile",
     description:"it is made by Samsung",
     image:"https://www.91-cdn.com/hub/wp-content/uploads/2022/03/Samsung-Galaxy-S22-Ultra-feat-1200x900.png"

    }
  ]

  res.render('index', { products });
});

module.exports = router;
