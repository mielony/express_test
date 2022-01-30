const express = require('express');
const router = express.Router();
const login = 'admin';
const pass = '1234';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie do panelu admina' });
});

router.post('/login', (req, res) => {
  const body = req.body;
  if (body.login === login && body.password === pass) {
    req.session.admin = 1;
    res.redirect('./admin');
  } else {
    res.redirect('./login');
  }
});

module.exports = router;
