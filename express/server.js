var express = require("express");
var app = express();

app.use("/.netlify/functions/server", require("./paths.js"));

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

module.exports = app;
module.exports.handler = require('serverless-http')(app);
