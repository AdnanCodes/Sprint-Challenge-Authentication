//Imports of packages
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//Database linking
const Users = require("../database/auth-model");

router.post("/register", (req, res) => {
  // implement registration
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
