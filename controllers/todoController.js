const bodyParser = require("body-parser");

let urlencodedParser = bodyParser.urlencoded({ extended: false });

let todos = [{ item: "Book Flight Ticket" }, { item: "Book cab" }];

module.exports = function(app) {
  app.get("/todo", (req, res) => res.render("todo", { todos }));

  app.post("/todo", urlencodedParser, (req, res) => {
    todos.push(req.body);
    res.send(todos);
  });

  app.delete("/todo/:item", function(req, res) {
    todos = todos.filter(todo => {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(todos);
  });
};
