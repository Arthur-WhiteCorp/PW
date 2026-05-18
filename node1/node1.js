const http = require("http");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT ?? 3333;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  process.argv.forEach((val, index) => {
    if (index === 2) {
      fs.readdir(val, null, (err, files) => {
        if (err) {
          console.log(`Error reading dir: ${err}`); // Just log it
          filesList = []; // Set to empty array as fallback
          return;
        }
        console.log(files);

        files.forEach((file, index) => {
          res.write(`${file.toString()} <br>`);
        });

        res.end();
      });
    }
  });
});

server.listen(PORT);
