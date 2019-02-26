const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/profile", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("statusCode", 200);
  res.sendFile(__dirname + "/topics/serving-html.html");
});

app.listen(3084);
