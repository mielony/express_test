const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizzes');

/* GET home page. */
router.get('/', (req, res) => {
  // new Quiz({title: 'Pomidorowa', vote: 0}).save();
  // new Quiz({title: 'Rosół', vote: 0}).save();
  // new Quiz({title: 'Ogórkowa', vote: 0}).save();
  // new Quiz({title: 'Krupnik', vote: 0}).save();
  const show = !req.session.vote;
  if (show == 0){
    Quiz.find({}, (err, data) => {
      res.render('quiz', { title: 'Quiz, Wyniki', data, show});
    });
  } else {
    Quiz.find({}, (err, data) => {
      res.render('quiz', { title: 'Quiz, Jaką lubisz zupę', data, show});
    });
  }
});

router.post('/', (req, res) => {
  const odp = req.body.quiz;
  //console.log('ODP: ',odp);
  Quiz.findOne({_id: odp}, (err, data) => {
    data.vote = data.vote +1;
    data.save((err) => {
      req.session.vote = 1;
      res.redirect('/quiz');
    });
  });
  
});



module.exports = router;
