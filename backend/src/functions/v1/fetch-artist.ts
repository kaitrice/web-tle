import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Artist } from "../../types";
import normalize_data from "../../normalize";

export async function fetchArtist(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    let data: Artist;

    try {
        data = await normalize_data();
        return {
            status: 200,
            jsonBody: data 
        };
    } catch (err) {
        context.log('ERROR: Issue normalizing data:', err);
        return {
            status: 500,
            body: "Server error. Please try again later."
        }
    }
};