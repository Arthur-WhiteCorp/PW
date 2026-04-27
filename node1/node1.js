const http = require('http');
const fs = require('fs')
require('dotenv').config();



const PORT = process.env.PORT ?? 3333;


const server = http.createServer(function (req, res) {
res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
res.write("Instituto de Computação");
res.end();
});


process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
    })
server.listen(PORT);