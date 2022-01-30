var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

  const newsSchema = new Schema({
    title:  {type: String, required: true}, // String is shorthand for {type: String}
    author: String,
    description:   {type: String, required: true},
    created: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('News', newsSchema);
