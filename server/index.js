

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const { app, conncetDb } = require("./db");
const { movieRoute } = require("./movie/_router");
const { actorRoute } = require("./actor/_router");
const { producerRoute } = require("./producer/_router");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
conncetDb()

app.use("/movies", movieRoute);
app.use("/actors", actorRoute);
app.use("/producer", producerRoute);
