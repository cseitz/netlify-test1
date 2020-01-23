var express = require("express");
var _app = express();
var app = express();

_app.use((req, res, next) => {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  next();
})

_app.use('/.netlify/functions/index', app);

app.get("/", (req, res) => {
  res.send("yeet home page is here!");
})
app.get("/what", (req, res) => {
  res.send("u wot");
})

_app.use("/", (req, res) => {
  res.send("pls");
})

module.exports.handler = require('serverless-http')(_app);
