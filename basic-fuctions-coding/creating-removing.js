const fs = require("fs");

fs.mkdir("creating-directory", () => {
  fs.writeFile("./dummyStuff/writing.txt", "Raj"); // creating file

  console.log("Removing action starts");

  var deleteFile = setTimeout(() => {
    fs.unlink("./dummyStuff/writing.txt", r => console.log(r)); // for removing file
    fs.rmdirSync("creating-directory"); // for removing directory in sync mode
    clearTimeout(deleteFile);
  }, 5000);
}); // for creating directory


// 1. Just creating directory: By using mkdir(Asynchronous) and in callback function doing 2 point
// 2. writeFile Function is use to create a file of any extensio(.js, .json, .txt, ...)
// 3. For removing directory 1st should remove files by using unlink