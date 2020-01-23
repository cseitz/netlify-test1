var express = require("express");
var app = express();
var router = express.Router();

router.get("/", (req, res) => {
  res.send("yeah boi");
})

router.get("/omg", (req, res) => {
  res.send("omg what");
})

app.use("/.netlify/functions/server", router);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

module.exports = app;
module.exports.handler = require('serverless-http')(app);
