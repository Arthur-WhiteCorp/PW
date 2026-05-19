import dotenv from "dotenv";
import fs from "node:fs/promises";
import http from "node:http";
import utils from "../my_modules/utils.js";

dotenv.config({ quiet: true, path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;

const server = http.createServer(function (req, res) {
  res.write("Sup my nigga");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
