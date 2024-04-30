const express = require('express');
const { MovieController } = require('./_controller');


const movieRoute = express.Router();
movieRoute.get(
  '/getMovies',
  MovieController.getMovies
);
movieRoute.post(
  '/addMovie',
  MovieController.addMovie
);


module.exports = {movieRoute}