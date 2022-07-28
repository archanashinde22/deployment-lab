require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.use(express.static(path.join(__dirname, "/../public")));
app.get("/", function (req, res) {
  rollbar.info("Main page accessed")
  res.sendFile(path.join(__dirname, "..public/index.html"));
});

const port = process.env.PORT || 4006;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
