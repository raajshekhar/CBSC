const fs = require("fs");

fs.readFile("./dummyStuff/reading.txt", "UTF8", (err, readMe) => {
  fs.writeFile("./dummyStuff/writing.txt", readMe);
}); // Asynchronously reads the entire contents of a file.
