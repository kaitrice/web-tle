import { app, HttpRequest, InvocationContext } from "@azure/functions";
import { authorize } from "../lib/auth/authorize";
import { routes } from "./v1";

var VERSION = 'v1'

routes.map((item) => {
    app.http(`${item.endpoint}`, {
        methods: item.methods,
        authLevel: 'anonymous',
        route: `${VERSION}/${item.endpoint}`,
        handler: authorize(async (req: HttpRequest, context: InvocationContext) => {
            return await item.handler(req, context);
        })
    })
})
