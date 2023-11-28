import { URL } from "node:url";

export function extractUrl(req) {
    return new URL(req.url, `https://${req.headers.host}`);
}

export function extractUrlParts(url) {
    const paths = url.pathname.split("/");

    return {
        baseRoute: "/" + paths[1],
        parts: paths.slice(2),
    };
}
