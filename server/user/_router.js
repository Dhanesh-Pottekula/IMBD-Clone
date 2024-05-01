const express = require('express');
const {  handlesignup, handlelogin } = require('./_controller');



const userRoute = express.Router();

userRoute.post("/",handlesignup);
userRoute.post("/login",handlelogin);

module.exports = {userRoute}