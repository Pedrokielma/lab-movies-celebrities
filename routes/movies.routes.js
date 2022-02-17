// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();


const Movie = require("../models/Movie.model");

router.get("/movies/create", (req, res, next) => {
    res.render("movies/new-movie")
})

router.post("/movies/create", (req, res, next) => {
    const { title, gener, plot, cast } = req.body;
    Movie
    .create({ title, gener, plot, cast })
    .then(() => res.redirect('/movies'))
    .catch(err => next(err));
});


router.get("/movies", (req, res, next) => {
    Movie
    .find()
    .then((allMovies) => {
      console.log(allMovies);
      res.render('movies/movies.hbs', { movies: allMovies });
    })
    .catch((err) => {
      next(err);
    });
})

// all your routes here

module.exports = router;