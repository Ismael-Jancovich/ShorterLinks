const express = require("express");
const {
  createUser,
  loginUser
} = require("../controllers/controllersUser");
const {validateUser} = require("../middlewares/middlewaresUser")
const routerUser = express.Router();

routerUser.post("/singup", validateUser, createUser);
routerUser.post("/login", loginUser ); 

module.exports = routerUser