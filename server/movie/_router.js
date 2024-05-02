const express = require('express');
const { MovieController } = require('./_controller');
const { checkForAuthuntication } = require('../middleware/middleware');
const multer = require("multer");


const upload = multer();
const movieRoute = express.Router();
movieRoute.get(
  '/getMovies',
  checkForAuthuntication,
  MovieController.getMovies
);
movieRoute.post(
  '/addMovie',
  checkForAuthuntication,
  MovieController.addMovie
);
movieRoute.post(
  '/getMovieById',
  checkForAuthuntication,
  MovieController.getMovieById
);
movieRoute.put(
  '/editMovie/:id',
  checkForAuthuntication,
  MovieController.editMovie
);


module.exports = {movieRoute}