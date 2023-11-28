import { routeRecords } from "./records.js";
import { extractUrl, extractUrlParts } from "../common/url.js";
import { sendNotFound } from "./responses.js";
import { routeUsers } from "./users.js";

export function route(req, res) {
    const url = extractUrl(req);
    const { baseRoute } = extractUrlParts(url);
    console.log(`${req.method} - ${url.href}`);

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
