import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { normalize_data } from "../../normalize";
import { Artist } from "../../types";

export async function web_tle_api_v1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    let data: Artist;

    try {
        data = await normalize_data();
    } catch (err) {
        context.log('Error fetching data:', err);
        return {
            status: 500,
            body: "Server error. Please try again."
        }
    }
    
    return {
        status: 200,
        body: `${JSON.stringify(data, null, 2)}!` 
    };
};

app.http('web-tle-api-v1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: web_tle_api_v1
});
