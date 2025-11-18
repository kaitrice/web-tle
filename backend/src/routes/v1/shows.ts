import { HttpResponseInit, InvocationContext } from "@azure/functions";
import { Show } from "../../types";
import normalize_data from "../../controllers/shows";

export async function fetchShows(context: InvocationContext): Promise<HttpResponseInit> {
    let data: Show[];

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