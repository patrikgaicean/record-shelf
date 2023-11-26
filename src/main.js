import path from 'node:path';
import fs from 'node:fs';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.join(__dirname, '../../certs/localhost+2-key.pem');
const certPath = path.join(__dirname, '../../certs/localhost+2.pem');

const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000, () => {
  console.log("server started on https://localhost:8000")
});
