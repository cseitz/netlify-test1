var express = require("express");
var app = express();
var router = express.Router();

router.get("/", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
})

router.get("/omg", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>omg what</h1>');
  res.end();
})

app.use("/.netlify/functions/server", router);

app.use((req, res) => {
  res.sendFile(__dirname + "/../index.html");
})

/*app.use((req, res) => {
  //res.sendFile(__dirname + "/../index.html");
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<!DOCTYPE html><script> alert("hi"); </script>
  <object
    type="text/html"
    data="/.netlify/functions/server${req.originalUrl}"
    style="width:100%;height:100%;"
  >`);
})*/

module.exports = app;
module.exports.handler = require('serverless-http')(app);
