var counter = function(arr) /*taking array as an argument*/ {
  return `There are ${
    arr.length
  } elements in this array and the content is ${arr
    .toLocaleString()
    .replace(/,/gi, "")}.`;
};

//module.exports = counter; // assigning the function
//module.exports.counter --- adding the property

module.exports = {
  counter
};

/* !! Access the functions in other pages/ modules !!

const counter = require("./basic-fuctions-coding/count");
console.log(counter.counter(["Raj", " is", " Raj"]));*/
