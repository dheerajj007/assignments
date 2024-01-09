const fs = require("node:fs");

const content = "Some content!";
fs.writeFile("a.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
