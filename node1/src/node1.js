const http = require("http");
const fs = require("fs");
const utils = require("../my_modules/utils");
require("dotenv").config({ quiet: true, path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (req.url.toString() === "/") {
    process.argv.forEach((val, index) => {
      if (index === 2) {
        fs.readdir(val, null, (err, files) => {
          if (err) {
            console.log(`Error reading dir: ${err}`); // Just log it
            filesList = []; // Set to empty array as fallback
            return;
          }
          console.log(files);

          files.forEach((file) => {
            res.write(utils.createLink(file.toString()));
          });

          res.end();
        });
      }
    });
  } else if (req.url.toString().includes(".txt")) {
    console.log(req.url.toString());
    res.write(utils.returnLink("Voltar"));
    let filePath = `./public${req.url.toString()}`;
    console.log(filePath);
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(`Error reading file: ${err}`);
      }
      if (data) {
        console.log(data);
        res.write(data.toString());
        res.end();
      }
    });
  }
});

server.listen(PORT);
