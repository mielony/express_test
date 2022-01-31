const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET home page. */
router.get('/', (req, res) => {
  const search = req.query.search;

  const myNews = News
    .find({title: new RegExp(search, 'i')})
    .sort({created: -1})  //rosnaco 1, -1 malejaco
    ;
  myNews.exec((err, data) => {
    console.log(data); 
    res.render('news', { title: 'News', data, search });
  })
  
});
 


module.exports = router;
