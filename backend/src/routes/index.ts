import { app, HttpRequest, InvocationContext } from "@azure/functions";
import { authorize } from "../lib/auth/authorize";
import { fetchArtist } from "./v1";

var VERSION = 'v1'

app.http('fetchArtist', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: `${VERSION}/artist`,
    handler: authorize(async (req: HttpRequest, context: InvocationContext) => fetchArtist(req, context))
});