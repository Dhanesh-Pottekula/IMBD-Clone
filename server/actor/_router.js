const express = require('express');
const { ActorController } = require('./_controller');


const actorRoute = express.Router();
actorRoute.get(
  '/get_actors',
  ActorController.getActors
);
actorRoute.post(
  '/add_actor',
  ActorController.addActor
);


module.exports = {actorRoute}