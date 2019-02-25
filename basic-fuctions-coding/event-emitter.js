const events = require("events");

const myEmitter = new events.EventEmitter();

// how to use and create emitters in basic syntax
myEmitter.on("someEvent", msg =>
  console.log(`myEmitter calls with msg: ${msg}`)
);

myEmitter.emit("someEvent", "Hi Raj!");

// example 2 -> Util + Event Emitter

const util = require("util");

var person = function(name) {
  this.name = name;
};

util.inherits(person, events.EventEmitter);

var raj = new person("raj");
var shannu = new person("shannu");
var parents = new person("parents");

const people = [raj, shannu, parents];
people.forEach(person =>
  person.on("speak", msg => {
    const content = `Added custom event speak like click and msg passed is ${msg}: ${
      person.name
    }`;
    console.log(content);
  })
);

raj.emit("speak", "Creator of this file");
shannu.emit("speak", "Brother of creator");
parents.emit("speak", "Rama and Uma of creator");
