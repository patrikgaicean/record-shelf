import fs from "node:fs";
import https from "node:https";
import { route } from "./routes/router.js";

const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH),
};

export const server = https.createServer(options, (req, res) => {
    route(req, res);
});
