const express = require('express');
const { ProducerController } = require('./_controller');
const { checkForAuthuntication } = require('../middleware/middleware');



const producerRoute = express.Router();

producerRoute.get(
  '/getproducer',
  checkForAuthuntication,
  ProducerController.getProducers
);
producerRoute.post(
  '/addProducer',
  checkForAuthuntication,
  ProducerController.addProducer
);


module.exports = {producerRoute}