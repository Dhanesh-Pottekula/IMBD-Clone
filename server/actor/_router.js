const express = require('express');
const { ActorController } = require('./_controller');
const { checkForAuthuntication } = require('../middleware/middleware');


const actorRoute = express.Router();
actorRoute.get(
  '/get_actors',
  checkForAuthuntication,
  ActorController.getActors
);
actorRoute.post(
  '/add_actor',
  checkForAuthuntication,
  ActorController.addActor
);


module.exports = {actorRoute}