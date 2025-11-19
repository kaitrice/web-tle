import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Artist } from "../../types";
import normalize_data from "../../controllers/music";

export async function handleArtist(req: HttpRequest, context: InvocationContext) {
    switch(req.method) {
        case "GET":
            return await fetchArtist(context)
    }
}

async function fetchArtist(context: InvocationContext): Promise<HttpResponseInit> {
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