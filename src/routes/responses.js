export function sendOk(res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Ok" }));
}

export function sendBadRequest(res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(400);
    res.end(JSON.stringify({ message: "Bad Request" }));
}

export function sendNotFound(res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Not Found" }));
}
