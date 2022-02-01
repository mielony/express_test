const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET home page. */
router.get('/', (req, res) => {
  const search = req.query.search || '';
  const sort = req.sort || -1;
  const myNews = News
    .find({title: new RegExp(search, 'i')})
    .sort({created: sort})  //rosnaco 1, -1 malejaco
    ;
  myNews.exec((err, data) => {
    res.json(data);
  })
  
});
 


module.exports = router;
