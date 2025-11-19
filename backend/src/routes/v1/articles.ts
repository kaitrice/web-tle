import { HttpResponseInit, InvocationContext } from "@azure/functions";
import { Articles } from "../../types";
import normalize_data from "../../controllers/articles";

export async function fetchArticles(context: InvocationContext): Promise<HttpResponseInit> {
    let data: Articles;
    try {
        data = await normalize_data();
        return {
            status: 200,
            jsonBody: data
        };
    } catch (err) {
        context.log("ERROR: Issue normalizing data:", err);
        return {
            status: 500,
            body: "Server error. Please try again later."
        };
    }
}
