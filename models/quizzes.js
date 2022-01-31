var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

  const quizzesSchema = new Schema({
    title:  {type: String, required: true},
    vote: {type: Number, required: true}, 
  });
  module.exports = mongoose.model('Quizzes', quizzesSchema);
