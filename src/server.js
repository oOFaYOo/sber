const http = require("http");
const fs = require('fs');
const express = require("express");
const errorhandler = require('errorhandler');
const app = express();
const mime = require('mime-types');

http.createServer(app).listen(80, "127.0.0.1");

app.use(function (req, res, next) {
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        let stream = fs.createReadStream("./build/index.html");
        stream.pipe(res);
        stream.on("end", ()=> res.end());
    } else next();
})

app.use(function (req, res, next) {
    let path = "./build" + `${req.url}`;
    if (req.method === "GET") {
        res.setHeader("Content-Type", mime.lookup(path));
        let stream = fs.createReadStream(path);
        stream.on("error", () => {
            errH(req, res, next, path);
        });
        stream.pipe(res);
        stream.on("end", () => res.end());
    } else next(errH(res,next));

})

app.use(errorhandler());

function errH(req, res, next, path) {
    errorhandler.title = "404 NOT FOUND"
    res.statusCode = 404;
    next(new Error(`${path} not found`));
}


