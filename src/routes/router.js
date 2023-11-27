import { routeUsers } from "./users.js";
import { routeRecords } from "./records.js";
import { extractUrl } from "../common/common.js";

export function route(req, res) {
    const url = extractUrl(req);
    const baseRoute = "/" + url.pathname.split("/")[1];

    switch (baseRoute) {
        case "/users":
            routeUsers(req, res);
            break;

        case "/records":
            routeRecords(req, res);
            break;

        default:
            sendNotFound(res);
    }
}

function sendNotFound(res) {
    res.writeHead(404);
    res.end("Not Found");
}
