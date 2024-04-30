const express = require('express');
const { ProducerController } = require('./_controller');



const producerRoute = express.Router();

producerRoute.get(
  '/getproducer',
  ProducerController.getProducers
);
producerRoute.post(
  '/addProducer',
  ProducerController.addProducer
);


module.exports = {producerRoute}