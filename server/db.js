const mongooseConnect = require("mongoose");
const { envDefaults } = require("./config");
const http = require("http");
const express = require("express");
const app = express();

const conncetDb = () => {
  const server = http.createServer(app);
  mongooseConnect.Promise = global.Promise;
  mongooseConnect
    .connect(envDefaults.mongoDbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((e) => console.log("Database connection Successful."))
    .catch((e) => console.log(e, "Database connection error."));

  mongooseConnect.connection.on("connected", () => {
    const PORT = envDefaults.localPort;
    server.listen(PORT, () => {
      console.log(`User Service started on port ${PORT}`);
    });
  });
};

module.exports = {conncetDb,app};
