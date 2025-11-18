import { HttpHandler, HttpRequest, InvocationContext } from "@azure/functions";

export function authorize(handler: HttpHandler): HttpHandler {
    return async (req: HttpRequest, context: InvocationContext) => {
        const key = req.headers.get("x-api-key")
        if (!key || key !== process.env.BUILD_API_KEY) {
            context.log("ERROR: Unauthorized request:", req.url);
            return {
                status: 401,
                body: "Unauthorized request."
            };
        }
        return handler(req, context)
    }
}