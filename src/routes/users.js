import { extractUrl, extractUrlParts } from "../common/url.js";
import { HTTP_METHODS } from "../common/http.js";
import { sendNotFound, sendOk } from "./responses.js";

export function routeUsers(req, res) {
    const url = extractUrl(req);
    const { parts } = extractUrlParts(url);
    const id = parts[0];

    if (req.method === HTTP_METHODS.GET && !id) {
        // handleGetUser(req, res, id);
        return sendOk(res);
    }

    if (req.method === HTTP_METHODS.POST && !id) {
        // handleCreateUser(req, res);
        return sendOk(res);
    }

    if (req.method === HTTP_METHODS.POST && id) {
        // handleUpdateUser(req, res, id);
        return sendOk(res);
    }

    if (req.method === HTTP_METHODS.DELETE && id) {
        // handleDeleteUser(req, res, id);
        return sendOk(res);
    }

    return sendNotFound(res);
}
