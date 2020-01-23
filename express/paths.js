var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("yeah boi");
})

router.get("/omg", (req, res) => {
  res.send("omg what");
})

module.exports = router;
