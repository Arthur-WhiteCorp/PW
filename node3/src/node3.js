import dotenv from "dotenv";
import fs from "node:fs/promises";
import http from "node:http";
import utils from "../my_modules/utils.js";
import { loremIpsum } from "lorem-ipsum";

dotenv.config({ quiet: true, path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;

async function readHTML(path) {
  let htmlFile;
  try {
    htmlFile = await fs.readFile(path);
  } catch (e) {
    throw e;
  }
  return htmlFile.toString();
}

const server = http.createServer(async function (req, res) {
  let path = req.url.toString();
  if (path === "/") {
    try {
      let page = await readHTML("public/page.html");
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(page);
      res.end();
    } catch (e) {
      console.log(`Error reading file:  ${e}`);
      res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
      res.write("Page not Found");
      res.end();
    }
  } else if (path === "/generate-lorem" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const paragraphCount = params.get("para"); // "5"
      console.log(paragraphCount); // "5" (string)
      const loremText = loremIpsum({
        count: paragraphCount,
        units: "paragraphs",
        sentenceLowerBound: 5,
        sentenceUpperBound: 15,
        paragraphLowerBound: 3,
        paragraphUpperBound: 7,
      });

      // Return just the HTML for the lorem text (not a full page)
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

      // Format paragraphs
      const formattedText = loremText
        .split("\n")
        .map((p) => `<p>${p}</p>`)
        .join("");

      res.write(`
      <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px;">
        <h3>Generated Lorem Ipsum (${paragraphCount} paragraph${paragraphCount > 1 ? "s" : ""}):</h3>
        ${formattedText}
      </div>
    `);
      res.end();
    });
  } else {
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
