

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const { app, conncetDb } = require("./db");
const { movieRoute } = require("./movie/_router");
const { actorRoute } = require("./actor/_router");
const { producerRoute } = require("./producer/_router");
const { userRoute } = require("./user/_router");
const cookieParser = require('cookie-parser');


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // Allow credentials (cookies)
  }));
app.use(express.json());
app.use(cookieParser());

conncetDb()


app.use("/movies", movieRoute);
app.use("/actors", actorRoute);
app.use("/producer", producerRoute);
app.use("/user", userRoute);
