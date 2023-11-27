import { URL } from "node:url";

export function extractUrl(req) {
    return new URL(req.url, `https://${req.headers.host}`);
}
