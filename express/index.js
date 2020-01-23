var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("yeet home page is here!");
})
app.get("/what", (req, res) => {
  res.send("u wot");
})

module.exports.handler = require('serverless-http')(app);
