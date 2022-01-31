const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const News = require('../models/news.js');

router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('./login');
    return;
  }
  next();
})

/* GET home page. */
router.get('/', (req, res) => {
  News.find({}, (err, data) => {  
    console.log(data);
    res.render('admin/index', { title: 'Administracja', data});
  });
  
});

router.get('/news/delete/:id', (req, res) => {
  News.findByIdAndDelete(req.params.id, (err) => {
    if (err) console.log("Blad przy usuwaniu", err);
    res.redirect('/admin');
  })
});

router.get('/news/add', (req, res) => {
  res.render('admin/news-form', {title: 'Dodaj newsa', errors: {}, body:{} });
})
 

router.post('/news/add', (req, res) => {
  const body = req.body;
  const newsData = new News(body);
  const errors = newsData.validateSync();
  if (errors !== undefined) {
    res.render('admin/news-form', {title: 'Dodaj newsa', errors, body});
  } 
  else {
    newsData.save((err) => {
      if (err) (console.log('Problem z zapisem do bazy', err)) });
    res.redirect('/admin');
  }
  //
});

router.get('/admin', (req, res) => {

});

module.exports = router;
   