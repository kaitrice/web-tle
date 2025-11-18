import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { normalize_data } from "../../normalize";
import { Artist } from "../types";

export async function web_tle_api_v1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const key = request.headers.get("x-api-key")

    if (!key || key !== process.env.BUILD_API_KEY) {
        context.log('UNAUTHORIZED REQUEST:', key, request.url);
        return {
            status: 401,
            body: "Unauthorized request."
        }
    }


    let data: Artist;

    try {
        data = await normalize_data();
    } catch (err) {
        context.log('ERROR FETCHING DATA:', err);
        return {
            status: 500,
            body: "Server error. Please try again later."
        }
    }
    
    return {
        status: 200,
        body: `${JSON.stringify(data, null, 2)}` 
    };
};

app.http('data', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: web_tle_api_v1
});
