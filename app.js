const express = require("express");

let todoController = require("./controllers/todoController");

const bodyParser = require("body-parser");

let app = express(); // for creating instance for routing

let urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set("view engine", "ejs"); // for using ejs view engine ***
app.use("/assets", express.static("topics/assets")); // Middleware

app.use("/todo", express.static("public")); // Middleware

todoController(app);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:id", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("statusCode", 200);
  const data = { age: 24, job: "ninja", hobbies: ["Watching videos"] };
  res.render("profile", { person: req.params.id, data });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// query string route

app.get("/querystring", (req, res) => {
  // req.query >> return Object
  console.log(req.query);
  res.render("querystring", { query: req.query });
});

app.post("/contact", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("contact", { data: req.body });
});

app.listen(3084);
