const mongoose = require('mongoose');

const movieSchema =new mongoose.Schema(
  {
    Name: String,
    Description:String
  }
);

module.exports= mongoose.model('Movie', movieSchema);
