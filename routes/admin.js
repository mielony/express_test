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
  // Dodany na sztywno pierwszy news :) 
  // const newsData = new News({
  //   title:  "Testowa informacja",
  //   author: "Mariusz Mielniczuk",
  //   description:   "Jest to jakis opis tego artyk.",
  // });
  // newsData.save((err) => {
  //   console.log("Blad zapisu do bazy danych", err);
  // })
  res.render('admin', { title: 'Administracja' });
});

router.get('/news/add', (req, res) => {
  
})


module.exports = router;
  