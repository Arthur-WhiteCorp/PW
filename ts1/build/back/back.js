import http from 'http';
import fs from "fs/promises";
async function readHTML(path) {
    let htmlFile;
    try {
        htmlFile = await fs.readFile(path);
    }
    catch (e) {
        throw e;
    }
    return htmlFile.toString();
}
const server = http.createServer(async (req, res) => {
    let url = req.url?.toString();
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        let html = await readHTML("public/page.html");
        res.write(html);
        res.end();
    }
    else if (url === "/build/ts1.js") {
        const js = await fs.readFile("build/ts1.js");
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.write(js);
        res.end();
    }
    else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(3000);
//# sourceMappingURL=back.js.map