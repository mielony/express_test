var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

  const newsSchema = new Schema({
    title:  {type: String, required: [true, 'Pole tytul jest wymagane']}, // String is shorthand for {type: String}
    author: {type: String, required: [true, 'Pole autor jest wymagane']}, 
    description:   {type: String},
    created: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('News', newsSchema);
