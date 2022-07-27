const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/../public")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..public/index.html"));
});

const port = process.env.PORT || 4006;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
