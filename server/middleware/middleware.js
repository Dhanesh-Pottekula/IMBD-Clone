const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const { getUser } = require("../services/auth");
const Auth = require("../user/_modal");
app.use(cookieParser());

async function checkForAuthuntication(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Provide token" });
  }

  const user = getUser(token);
  req.user = user;
  console.log(user)
  const existingUser = await Auth.findById(user?._id);

  if (!existingUser) {
    return res.status(401).json({ message: "Invalid token" });
  }

  return next();
}

module.exports = { checkForAuthuntication };
