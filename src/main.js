import fs from "node:fs";
import https from "node:https";

const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH),
};

https
    .createServer(options, (req, res) => {
        res.writeHead(200);
        res.end("hello world\n");
    })
    .listen(8000, () => {
        console.log("server started on https://localhost:8000");
    });
