var express = require("express");
var _app = express();
var app = express();

_app.use('/.netlify/functions/index', app);

app.get("/", (req, res) => {
  res.send("yeet home page is here!");
})
app.get("/what", (req, res) => {
  res.send("u wot");
})

module.exports.handler = require('serverless-http')(_app);
