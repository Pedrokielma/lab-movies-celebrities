const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    gener: String,
    plot: String,
    cast: [String],
  },
);

module.exports = model('Movie', movieSchema);
