const fs = require("node:fs");

let fileData = "";

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fileData = data.replace(/\s+/g, " ").trim();
  console.log(fileData);

  fs.writeFile("a.txt", fileData, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});
