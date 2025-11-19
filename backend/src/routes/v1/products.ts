import { HttpResponseInit, InvocationContext } from "@azure/functions";
import { Products } from "../../types";
import normalize_data from "../../controllers/products";

export async function fetchProducts(context: InvocationContext): Promise<HttpResponseInit> {
    let data: Products;
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
